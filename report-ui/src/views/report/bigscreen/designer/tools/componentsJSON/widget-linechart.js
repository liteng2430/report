/*
 * @Descripttion: 折线图json
 * @version: 
 * @Author: qianlishi
 * @Date: 2021-08-29 07:24:48
 * @LastEditors: qianlishi
 * @LastEditTime: 2021-08-29 07:24:49
 */
export const widgetLinechart = {
    code: 'widget-linechart',
    type: 'chart',
    label: '折线图',
    icon: 'icontubiaozhexiantu',
    options: {
      // 配置
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '折线图',
        },
        {
          type: 'vue-color',
          label: '背景颜色',
          name: 'background',
          required: false,
          placeholder: '',
          value: ''
        },
        [
          {
            name: '折线设置',
            list: [
              {
                type: 'el-switch',
                label: '标记点',
                name: 'markPoint',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-slider',
                label: '点大小',
                name: 'pointSize',
                required: false,
                placeholder: '',
                value: 10,
              },
              {
                type: 'el-switch',
                label: '平滑曲线',
                name: 'smoothCurve',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-switch',
                label: '面积堆积',
                name: 'area',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'el-slider',
                label: '面积厚度',
                name: 'areaThickness',
                required: false,
                placeholder: '',
                value: 5,
              },
              {
                type: 'el-slider',
                label: '线条宽度',
                name: 'lineWidth',
                required: false,
                placeholder: '',
                value: 4,
              },
            ],
          },
          {
            name: '标题设置',
            list: [
              {
                type: 'el-switch',
                label: '标题',
                name: 'isNoTitle',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'el-input-text',
                label: '标题',
                name: 'titleText',
                required: false,
                placeholder: '',
                value: '',
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'textColor',
                required: false,
                placeholder: '',
                value: '##FFD700'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'textFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'textFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
              {
                type: 'el-select',
                label: '字体位置',
                name: 'textAlign',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'center', name: '居中'},
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'center'
              },
              {
                type: 'el-input-text',
                label: '副标题',
                name: 'subText',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'subTextFontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'subTextFontSize',
                required: false,
                placeholder: '',
                value: 20
              },
            ],
          },
          {
            name: 'X轴设置',
            list: [
              {
                type: 'el-input-text',
                label: '名称',
                name: 'xName',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '显示',
                name: 'hideX',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '坐标名颜色',
                name: 'xNameColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'xNameFontSize',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'el-slider',
                label: '文字角度',
                name: 'textAngle',
                required: false,
                placeholder: '',
                value: 0
              },
              {
                type: 'el-input-number',
                label: '文字间隔',
                name: 'textInterval',
                required: false,
                placeholder: '',
                value: 0
              },
              {
                type: 'el-switch',
                label: '轴反转',
                name: 'reversalX',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'vue-color',
                label: '颜色',
                name: 'Xcolor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-text',
                label: '字号',
                name: 'fontSizeX',
                required: false,
                placeholder: '',
                value: 12,
              },
              {
                type: 'vue-color',
                label: '轴颜色',
                name: 'lineColorX',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-switch',
                label: '分割线显示',
                name: 'isShowSplitLineX',
                require: false,
                placeholder: '',
                value: false,
              },
              {
                type: 'vue-color',
                label: '分割线颜色',
                name: 'splitLineColorX',
                required: false,
                placeholder: '',
                value: '#fff',

              }
            ],
          },
          {
            name: 'Y轴设置',
            list: [
              {
                type: 'el-input-text',
                label: '名称',
                name: 'textNameY',
                require: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShowY',
                require: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '坐标名颜色',
                name: 'NameColorY',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-input-text',
                label: '字体大小',
                name: 'NameFontSizeY',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'el-switch',
                label: '轴反转',
                name: 'reversalY',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'vue-color',
                label: '颜色',
                name: 'colorY',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-text',
                label: '字号',
                name: 'fontSizeY',
                required: false,
                placeholder: '',
                value: 12,
              },
              {
                type: 'vue-color',
                label: '轴颜色',
                name: 'lineColorY',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-switch',
                label: '分割线显示',
                name: 'isShowSplitLineY',
                require: false,
                placeholder: '',
                value: false,
              }, {
                type: 'vue-color',
                label: '分割线颜色',
                name: 'splitLineColorY',
                required: false,
                placeholder: '',
                value: '#fff',

              }
            ],
          },
          {
            name: '数值设定',
            list: [
              {
                type: 'el-switch',
                label: '显示',
                name: 'isShow',
                required: false,
                placeholder: '',
                value: false
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: 12
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'subTextColor',
                required: false,
                placeholder: '',
                value: '#fff'
              },
              {
                type: 'el-select',
                label: '字体粗细',
                name: 'fontWeight',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'normal', name: '正常'},
                  {code: 'bold', name: '粗体'},
                  {code: 'bolder', name: '特粗体'},
                  {code: 'lighter', name: '细体'}
                ],
                value: 'normal'
              },
            ],
          },
          {
            name: '提示语设置',
            list: [
              {
                type: 'el-input-text',
                label: '字体大小',
                name: 'fontSize',
                required: false,
                placeholder: '',
                value: ''
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lineColor',
                required: false,
                placeholder: '',
                value: ''
              },
            ],
          },
          {
            name: '坐标轴边距设置',
            list: [
              {
                type: 'el-slider',
                label: '左边距(像素)',
                name: 'marginLeft',
                required: false,
                placeholder: '',
                value: 10,
              },
              {
                type: 'el-slider',
                label: '顶边距(像素)',
                name: 'marginTop',
                required: false,
                placeholder: '',
                value: 50,
              },
              {
                type: 'el-slider',
                label: '右边距(像素)',
                name: 'marginRight',
                required: false,
                placeholder: '',
                value: 40,
              },
              {
                type: 'el-slider',
                label: '底边距(像素)',
                name: 'marginBottom',
                required: false,
                placeholder: '',
                value: 10,
              },
            ],
          },
          {
            name: '图例操作',
            list: [
              {
                type: 'el-switch',
                label: '图例',
                name: 'isShowLegend',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '字体颜色',
                name: 'lengedColor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'el-input-number',
                label: '字体大小',
                name: 'lengedFontSize',
                required: false,
                placeholder: '',
                value: 16,
              },
              {
                type: 'el-input-number',
                label: '图例宽度',
                name: 'lengedWidth',
                required: false,
                placeholder: '',
                value: 15,
              },
              {
                type: 'el-select',
                label: '横向位置',
                name: 'lateralPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'left', name: '左对齐'},
                  {code: 'right', name: '右对齐'},
                ],
                value: 'left'
              },
              {
                type: 'el-select',
                label: '纵向位置',
                name: 'longitudinalPosition',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'top', name: '顶部'},
                  {code: 'bottom', name: '底部'},
                ],
                value: ''
              },
              {
                type: 'el-select',
                label: '布局前置',
                name: 'layoutFront',
                required: false,
                placeholder: '',
                selectOptions: [
                  {code: 'vertical', name: '竖排'},
                  {code: 'horizontal', name: '横排'},
                ],
                value: ''
              },
            ],
          },
          {
            name: '自定义配色',
            list: [
              {
                type: 'customColor',
                label: '',
                name: 'customColor',
                required: false,
                value: [{color: '#1E90FF'}],
              },
            ],
          },
        ],
      ],
      // 数据
      data: [
        {
          type: 'el-radio-group',
          label: '数据类型',
          name: 'dataType',
          require: false,
          placeholder: '',
          selectValue: true,
          selectOptions: [
            {
              code: 'staticData',
              name: '静态数据',
            },
            {
              code: 'dynamicData',
              name: '动态数据',
            },
          ],
          value: 'staticData',
        },
        {
          type: 'el-input-number',
          label: '刷新时间(毫秒)',
          name: 'refreshTime',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          value: 5000
        },
        {
          type: 'el-button',
          label: '静态数据',
          name: 'staticData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'staticData',
          value: {"categories": ["苹果","三星","小米","oppo","vivo"],"series": [{"name": "手机品牌","data": [1009,3409,2309,5409,3409]}]},
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          chartType: 'widget-linechart',
          dictKey: 'LINE_PROPERTIES',
          relactiveDomValue: 'dynamicData',
        },
      ],
      // 坐标
      position: [
        {
          type: 'el-input-number',
          label: '左边距',
          name: 'left',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '上边距',
          name: 'top',
          required: false,
          placeholder: 'px',
          value: 0,
        },
        {
          type: 'el-input-number',
          label: '宽度',
          name: 'width',
          required: false,
          placeholder: '该容器在1920px大屏中的宽度',
          value: 400,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 200,
        },
      ],
    }
  }
