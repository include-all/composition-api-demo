const PREVIEW_TITLE = {
  pending: {
    deliver_count_wait: '待处理数',
    deliver_count_today: '今日处理数',
    deliver_count_total: '累积处理数',
  },
  done: {
    check_count_wait: '待检查数',
    check_count_today: '今日检查数',
    check_count_total: '累积检查数'
  }
}

const TABLE_TEXT_MAP = {
  pending: '待处理',
  done: '已处理',
  building: 'building',
  company: 'company',
}

const STATUS_TYPE_LIST = [
  {
    code: 1,
    name: '待检查',
  },
  {
    code: 2,
    name: '已检查'
  }
]

const TABLE_COLUMNS_MAP = {
  building_pending: [
    {
      label: "building名称(待处理)",
      prop: "building_name"
    },
    {
      label: "待处理company数",
      prop: "deliver_count_wait"
    }
  ],
  building_done: [
    {
      label: "building名称（已处理）",
      prop: "building_name"
    },
    {
      label: "待检查company数",
      prop: "deliver_count_wait"
    }
  ],
  company_pending: [
    {
      label: "company名称（待处理）",
      prop: "building_name"
    },
    {
      label: "目标数",
      prop: "deliver_count_wait"
    }
  ],
  company_done: [
    {
      label: "company名称（已处理）",
      prop: "building_name"
    },
    {
      label: "目标数",
      prop: "deliver_count_wait"
    }
  ]
}

export { PREVIEW_TITLE, TABLE_TEXT_MAP, STATUS_TYPE_LIST, TABLE_COLUMNS_MAP }
