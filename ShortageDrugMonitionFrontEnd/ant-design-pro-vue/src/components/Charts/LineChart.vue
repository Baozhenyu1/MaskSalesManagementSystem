<template>
  <div class="line-chart">
    <div class="chart-wrapper" >      `
      <div force-fit="true" id="main" style="left: -10%; width: 120%; height: 100%;"></div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: "LineChart",
    data () {
      return {
        rate: [],
        myChart: {},
        timeStamp: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        testData: [322, 113, 443, 123, 143, 445, 661, 627, 103, 629],
        option: {}
      }
    },
    mounted () {
      this.draw()
      console.log("line drwan")
      //this.test()
    },
    methods: {
      draw() {
        this.rate = this.show_data
        this.myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        this.option = { backgroundColor: '#fff',
          animation: false,
          legend: {
            bottom: 10,
            left: 'center',
            data: ['report number']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
              color: '#000'
            },
            position: function (pos, params, el, elRect, size) {
              var obj = { top: 10 }
              obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30
              return obj
            },
            formatter: function (datas) {
              var res = datas[0].name + '<br/>'
              res += datas[0].marker + datas[0].seriesName + '：' +
                a.data1.values[a.data1.categoryData.indexOf(datas[0].name)] + '<br/>'
              return res
            }
          },
          axisPointer: {
            link: { xAxisIndex: 'all' },
            label: {
              backgroundColor: '#777'
            }
          },
          toolbox: {
            show: false
          },
          brush: {
            xAxisIndex: 'all',
            brushLink: 'all',
            outOfBrush: {
              colorAlpha: 0.1
            }
          },
          grid: [
            {
              left: '10%',
              right: '8%',
              height: '50%',
              top: '10%'
            },
            {
              left: '10%',
              right: '8%',
              top: '65%',
              height: '16%'
            }
          ],
          xAxis: [
            {
              type: 'category',
              data: a.data1.categoryData,
              scale: true,
              boundaryGap: false,
              axisLine: { onZero: false },
              splitLine: { show: false },
              splitNumber: 20,
              min: 'dataMin',
              max: 'dataMax',
              axisPointer: {
                z: 100
              }
            },
            {
              type: 'category',
              gridIndex: 1,
              data: a.data1.categoryData,
              scale: true,
              boundaryGap: false,
              axisLine: { onZero: false },
              axisTick: { show: false },
              splitLine: { show: false },
              axisLabel: { show: false },
              splitNumber: 20,
              min: 'dataMin',
              max: 'dataMax'
            }
          ],
          yAxis: [
            {
              scale: true,
              splitArea: {
                show: true
              }
            },
            {
              scale: true,
              gridIndex: 1,
              splitNumber: 2,
              axisLabel: { show: false },
              axisLine: { show: false },
              axisTick: { show: false },
              splitLine: { show: false }
            }
          ],
          dataZoom: [
            {
              type: 'inside',
              xAxisIndex: [0, 1],
              start: 50,
              end: 100
            },
            {
              show: true,
              xAxisIndex: [0, 1],
              type: 'slider',
              top: '90%',
              start: 50,
              end: 100
            }
          ],
          series: [
            {
              name: '报道数量',
              type: 'line',
              data: a.data1.values,
              smooth: true,
              lineStyle: {
                normal: { opacity: 0.5 }
              }
            },
            {
              position: 'relative',
              name: '报道数量',
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: a.data1.values
            }
          ]
        }
        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(this.option);
      },
      test() {
        console.log("using test data")
        this.intnum = setInterval(_ => {
          //this.testData.splice(0, 1)
          //this.testData.push(Math.floor(Math.random() * 100) + 200)
          this.timeStamp.splice(0, 1)
          this.timeStamp.push(this.timeStamp[this.timeStamp.length - 1] + 1)
          this.myChart.setOption({
            xAxis: {
              data: this.timeStamp
            },
            series: [{
              data: this.show_data
            }]
          });

          //this.sendData()

        }, 1000)
      }
    }
  }
</script>

<style scoped>

</style>