/**
 * String,Boolean,Number,Object,Array,Function
 * !!! @tableBase: 必需属性 表格基本配置
 *      @isCheck: 是否需要改勾选
 *      @isPage: 是否需要添加分页组件
 *      @isNum: 是否需要序号列
 *      @controlColumnWidth: 操作列宽度
 *      @pageNumCount: 表格每页条数
 *      @labelPosition: 表格上方查询表单的labelPosition
 *      @labelWidth: 查询表单统一的labelWidth,默认 100px
 *      @queryUrl: 表格请求数据url
 * @column: 表格列配置
 *  !!! @props: 必填
 *  !!! @label: 必填
 *      @alias: 此列作为查询项时，label需要使用别的名称，填写此字段
 *      @width: 表格列最小宽度
 *      @refObjValue: 表格列的字典属性名
 *      @render: 针对时间、数组字典翻译文字中间需要用分隔符等，其他数据格式化时，设置的自定义格式，例如 yyyy-MM-dd、yy/MM/dd
 *      @headerAlign: 表头文字对齐位置
 *      @align: 文字对齐位置
 *      @isFixed: 是否需要冻结
 *      @showOverflowTooltip: 过多是否隐藏
 *      @isSearch: 是否需要作为表格上方的查询项
 *      @labelWidth: 作为查询项的labelWidth 默认使用 tableBase 的 labelWidth
 *      @labelPosition: 表格上方查询表单的labelPosition
 *      @formType: 作为查询项时使用什么组件,isSearch:true时,此项必填
 *      @isHidden: 此列是否隐藏 true 为隐藏
 * @description: 方法功能描述
 * @author:zhangyz
 * @version: V0.1.0
 * @date: 2021-03-26 09:03:11
 * @note:注意事项
 * @to-do:
*/
export const tableConfig = {
    tableBase:{
        isCheck: true,
        isPage: true,
        isNum:true,
        controlColumnWidth:200,
        pageNumCount:20,
        labelPosition:'right',
        queryUrl:jsdy_api.ybdx.list
    },
    column: [
        {
            props: "name",
            label: "预报方案名称",
            isSearch:true,
            formType:"input"
        },
        {
            props: "code",
            label: "告警对象",
            isSearch:true,
            formType:"input"
        },
        {
            props: "river",
            label: "阈值"
        },
        {
            props: "basin",
            label: "流域分区",
            isHidden:true,
            isSearch:true,
            formType:"input"
        },
        {
            props: "basin",
            label: "发送用户"
        },
        {
            props: "time",
            label: "发送时间"
        },
        {
            props: "yber",
            label: "发送频次"
        },
        {
            props: "isPublish",
            label: "管理单位"
        }
    ],
    /**
     * @description:按钮配置
     * @author:zhangyz
     * @date: 2021-03-24 09:23:43
     * @icon: 图标 String 参照element icon
     * @inline: 行内操作按钮
     * @search: 表格搜索区域按钮
     * @grid: 表格操作区域按钮
     *      @btnIcon: 尺寸 String medium / small / mini
     *      @btnSize: 按钮文字 String
     *      @btnText: 按钮位置 String inline:行内操作 / search:表格查询区域 / grid:表格上方操作区域
     *      @btnType: 按钮类型 String  参照element button primary / success / warning / danger / info / text
     *      @btnPlain: 是否朴素 Boolean
     *      @btnCircle: 是否圆形 Boolean
     *      @btnRound:  是否圆角 Boolean
     *      @btnActionControl:  按钮点击事件的方法名
    */
    actions:{
        search:[],
        grid:[
            {
                btnText:"添加",
                btnType:"primary"
            }
        ],
        inline:[
            {
                btnText:"查看",
                btnType:"text"
            },
            {
                btnText:"删除",
                btnType:"text"
            },
            {
                btnText:"发送",
                btnType:"text"
            }
        ]
    }
};
