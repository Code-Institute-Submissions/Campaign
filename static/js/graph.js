queue()
    .defer(d3.json, "/donorsUS/projects")
    .await(makeGraphs);

function makeGraphs(error, projectsJson) {

    // projectsJson data adjusting
    var donorsUSProjects = projectsJson;
    var dateFormat = d3.time.format("%Y-%m-%d %H:%M:%S");
    donorsUSProjects.forEach(function (d) {
        d["date_posted"] = dateFormat.parse(d["date_posted"]);
        d["date_posted"].setDate(1);
        d["total_donations"] = +d["total_donations"];
        d["total_price_including_optional_support"] = +d["total_price_including_optional_support"];
    });


    // Crossfilter
    var ndx = crossfilter(donorsUSProjects);

    // Dimensions that will be in the crossfilter
    var dateDim = ndx.dimension(function (d) {
        return d["date_posted"];
    });
    var resourceTypeDim = ndx.dimension(function (d) {
        return d["resource_type"];
    });
    var povertyLevelDim = ndx.dimension(function (d) {
        return d["poverty_level"];
    });
    var stateDim = ndx.dimension(function (d) {
        return d["school_state"];
    });
    var totalDonationsDim = ndx.dimension(function (d) {
        return d["total_donations"];
    });
    var fundingStatus = ndx.dimension(function (d) {
        return d["funding_status"];
    });
    var totalPriceIncDim = ndx.dimension(function (d) {
        return d["total_price_including_optional_support"];
    });

    // Metrics
    var numProjectsByDate = dateDim.group();
    var numProjectsByResourceType = resourceTypeDim.group();
    var numProjectsByPovertyLevel = povertyLevelDim.group();
    var numProjectsByFundingStatus = fundingStatus.group();
    var totalDonationsByState = stateDim.group().reduceSum(function (d) {
        return d["total_donations"];
    });
    var totalDonationsByDate = dateDim.group().reduceSum(function (d) {
        return d["total_donations"];
    });
    var stateGroup = stateDim.group();

    var totalPriceIncByDate = dateDim.group().reduceSum(function (d) {
        return d["total_price_including_optional_support"];
    });

    // Code to create average donation group
    var totalAverageDonations = ndx.groupAll().reduce(
        function (d, v) {
            ++d.count;
            d.total += v.total_donations;
            return d;
        },
        function (d, v) {
            --d.count;
            d.total -= v.total_donations;
            return d;
        },
        function () {
            return {count: 0, total: 0};
        }
    );
    // Code to create average donation value
    var calc_average = function (d) {
        return d.count > 0 ? d.total / d.count : 0;
    }

    var all = ndx.groupAll();
    var totalDonations = ndx.groupAll().reduceSum(function (d) {
        return d["total_donations"];
    });
    // State with highest number of donations
    var max_state = totalDonationsByState.top(1)[0].value;

    // Values for chart usage
    var minDate = dateDim.bottom(1)[0]["date_posted"];
    var maxDate = dateDim.top(1)[0]["date_posted"];

    // Charts
    // First section on Education page
    var timeChart = dc.compositeChart("#time-chart");
    var statesChart = dc.barChart("#map-chart");
    // Second section on Education page
    var numberProjectsND = dc.numberDisplay("#number-projects-nd");
    var totalDonationsND = dc.numberDisplay("#total-donations-nd");
    var AverageDonationsND = dc.numberDisplay("#average-donations-nd");
    // Third section on Education page
    var resourceTypeChart = dc.rowChart("#resource-type-row-chart");
    var povertyLevelChart = dc.rowChart("#poverty-level-row-chart");
    var fundingStatusChart = dc.pieChart("#funding-chart");

    // Drop down state menu at top of Education page
    selectField = dc.selectMenu('#menu-select')
        .dimension(stateDim)
        .group(stateGroup)
        .promptText('States');

    // Tooltip for when graph parts are hovered over
    var tooltip = d3.select("#map_chart")
        .append("div")
        .attr("id", "tooltip")
        .classed("hidden", true);

    d3.selectAll(".bar").on("mouseover", function (d) {
        d3.select("#tooltip")
            .classed("hidden", false)
            .style("left", d3.event.pageX - 100 + "px")
            .style("top", d3.event.pageY - 40 + "px");
        tooltip.html(d);
    })
        .on("mouseout", function () {
            d3.select("#tooltip")
                .classed("hidden", true);
        });

    // First section of Education page
    statesChart
        .width(800)
        .height(200)
        .transitionDuration(500)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(stateDim)
        .group(stateGroup)
        .centerBar(false)
        .gap(1)
        .elasticY(true)
        .colors(["steelblue"])
        .xUnits(dc.units.ordinal)
        .xAxisLabel("State")
        .x(d3.scale.ordinal().domain(stateGroup))
        .y(d3.scale.linear().domain([0, max_state]))
        .renderHorizontalGridLines(true)
        .yAxis().tickFormat(d3.format("s")).ticks(4);

    timeChart
        .width(800)
        .height(200)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .legend(dc.legend().x(70).y(10).itemHeight(10).gap(5))
        .compose([
            dc.lineChart(timeChart)
                .dimension(dateDim)
                .colors("steelblue")
                .group(totalDonationsByDate, 'Total Donations'),
            dc.lineChart(timeChart)
                .dimension(dateDim)
                .group(totalPriceIncByDate, 'Total Price Including Optional Support')
                .colors('#CC1520')
        ])

        .transitionDuration(500)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .brushOn(false)
        .elasticY(true)
        .xAxisLabel("Year")
        .yAxis().tickFormat(d3.format("s")).ticks(4);

    // Second section of Education page
    numberProjectsND
        .formatNumber(d3.format("d"))
        .valueAccessor(function (d) {
            return d;
        })
        .group(all);

    totalDonationsND
        .formatNumber(d3.format("d"))
        .valueAccessor(function (d) {
            return d;
        })
        .group(totalDonations)
        .formatNumber(d3.format(".3s"));

    AverageDonationsND
        .formatNumber(d3.format("d"))
        .valueAccessor(calc_average)
        .group(totalAverageDonations)
        .formatNumber(d3.format(".3s"));

    // Third section of Education page
    resourceTypeChart
        .width(300)
        .height(250)
        .dimension(resourceTypeDim)
        .group(numProjectsByResourceType)
        .xAxis().ticks(4);

    povertyLevelChart
        .width(300)
        .height(250)
        .dimension(povertyLevelDim)
        .group(numProjectsByPovertyLevel)
        .xAxis().ticks(4);

    fundingStatusChart
        .height(220)
        .width(220)
        .radius(90)
        .innerRadius(40)
        .transitionDuration(1500)
        .dimension(fundingStatus)
        .group(numProjectsByFundingStatus);

    dc.renderAll();
}
