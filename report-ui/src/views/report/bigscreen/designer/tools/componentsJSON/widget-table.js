/*
 * @Descripttion: 表格json
 * @version: 
 * @Author: qianlishi
 * @Date: 2021-08-29 07:16:10
 * @LastEditors: qianlishi
 * @LastEditTime: 2021-08-29 07:17:17
 */
export const widgetTable = {
    code: 'widget-table',
    type: 'html',
    label: '表格',
    icon: 'iconbiaoge',
    options: {
      setup: [
        {
          type: 'el-input-text',
          label: '图层名称',
          name: 'layerName',
          required: false,
          placeholder: '',
          value: '表格',
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
          type: 'el-input-number',
          label: '字体大小',
          name: 'fontSize',
          required: false,
          placeholder: '',
          value: '16'
        },
        {
          type: 'el-switch',
          label: '开启滚动',
          name: 'isRoll',
          required: false,
          placeholder: '',
          value: true
        },
        {
          type: 'el-input-number',
          label: '滚动时间(毫秒)',
          name: 'rollTime',
          required: false,
          placeholder: '',
          value: 1000
        },
        {
          type: 'el-input-number',
          label: '滚动个数',
          name: 'rollNumber',
          required: false,
          placeholder: '',
          value: 1
        },
        {
          type: 'el-switch',
          label: '线条',
          name: 'isLine',
          required: false,
          placeholder: '',
          value: false
        },
        {
          type: 'el-input-number',
          label: '边框宽度',
          name: 'borderWidth',
          required: false,
          placeholder: '',
          value: 1
        },
        {
          type: 'vue-color',
          label: '边框颜色',
          name: 'borderColor',
          required: false,
          placeholder: '',
          value: '#fff'
        },
        [
          {
            name: '表头设置',
            list: [
              {
                type: 'el-switch',
                label: '表头显隐',
                name: 'isHeader',
                required: false,
                placeholder: '',
                value: true,
              },
              {
                type: 'vue-color',
                label: '表头颜色',
                name: 'headColor',
                require: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'vue-color',
                label: '表头背景',
                name: 'headBackColor',
                require: false,
                placeholder: '',
                value: '#0a73ff',
              },
            ],
          },
          {
            name: '表体设置',
            list: [
              {
                type: 'vue-color',
                label: '文字颜色',
                name: 'bodyColor',
                required: false,
                placeholder: '',
                value: '#fff',
              },
              {
                type: 'vue-color',
                label: '表格背景',
                name: 'tableBgColor',
                require: false,
                placeholder: '',
                value: '',
              },
              {
                type: 'vue-color',
                label: '奇行颜色',
                name: 'oldColor',
                require: false,
                placeholder: '',
                value: '#0a2732',
              },
              {
                type: 'vue-color',
                label: '偶行颜色',
                name: 'eventColor',
                required: false,
                placeholder: '',
                value: '#003b51'
              }
            ],
          },
        ],
        {
          type: 'dynamic-add-table',
          label: '',
          name: 'dynamicAddTable',
          required: false,
          placeholder: '',
          value: [{name: '日期', key: 'date', width: 200}, {name: '姓名', key: 'name', width: 200}, {
            name: '地址',
            key: 'address',
            width: '200'
          }]
        }
      ],
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
          value: [
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
            {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          ],
        },
        {
          type: 'dycustComponents',
          label: '',
          name: 'dynamicData',
          required: false,
          placeholder: 'px',
          relactiveDom: 'dataType',
          relactiveDomValue: 'dynamicData',
          chartType: 'widget-table',
          dictKey: 'TEXT_PROPERTIES', //表格的暂不起作用
          value: '',
        },
      ],
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
          value: 600,
        },
        {
          type: 'el-input-number',
          label: '高度',
          name: 'height',
          required: false,
          placeholder: '该容器在1080px大屏中的高度',
          value: 300,
        },
      ]
    }
  }
