import { ref, reactive, onMounted, computed } from "@vue/composition-api";
import {
  PREVIEW_TITLE,
  TABLE_TEXT_MAP,
  TABLE_COLUMNS_MAP
} from "./option";

// 是否下发和类型
function useTaskAndType(props = { taskStatusInit: 'pending', typeStatusInit: 'company' }) {
  const taskStatus = ref(props.taskStatusInit);
  const typeStatus = ref(props.typeStatusInit);
  const status = computed(() => taskStatus.value === 'pending' ? 'wait' : 'delivered')
  const tableTitle = computed(
    () => TABLE_TEXT_MAP[taskStatus.value] + TABLE_TEXT_MAP[typeStatus.value]
  )
  const config = computed(() => {
    return {
      columns: TABLE_COLUMNS_MAP[`${typeStatus.value}_${taskStatus.value}`]
    };
  });
  return {
    taskStatus,
    typeStatus,
    status,
    tableTitle,
    config
  }
}

// 筛选form
function useForm() {
  const queryInit = {
    company_name: "",
    building_id: "",
    warning_type: "",
    building_name: "",
    status: ""
  }
  const query = reactive({ ...queryInit });
  const resetForm = (params = {}) => {
    Object.assign(query, queryInit, params)
  }
  return {
    query,
    resetForm,
  }
}

// building下拉框
function useBuildingList() {
  const buildingList = ref([]);
  const getBuildingList = ({ status }) => {
    console.log(status)
    const res = {
      wait: [
        {
          building_id: "89328938",
          building_name: "building1"
        },
        {
          building_id: "74832784",
          building_name: "building2"
        },
        {
          building_id: "43242432",
          building_name: "building3"
        }
      ],
      delivered: [
        {
          building_id: "893454528938",
          building_name: "building4"
        },
        {
          building_id: "74832545784",
          building_name: "building5"
        },
        {
          building_id: "43245452432",
          building_name: "building5"
        }
      ]
    }
    buildingList.value = res[status]
  }
  return {
    buildingList,
    getBuildingList
  }
}

// 风险下拉框
function useWarningTypeList() {
  const getWarningTypeList = (params) => {
    console.log(params)
    return [
      {
        name: "类型1",
        code: 1
      },
      {
        name: "类型2",
        code: 2
      }
    ]
  }
  onMounted(() => {
    warningTypeList.value = getWarningTypeList()
  })
  const warningTypeList = ref([]);
  return {
    warningTypeList,
  }
}
// 状态下拉框
function useStatusTypeList(list) {
  const statusTypeList = ref(list);
  return {
    statusTypeList
  }
}
function useCardList() {
  const cardList = ref({})
  const getCardListData = ({ taskStatus }) => {
    const res = {
      pending: {
        deliver_count_today: "18",
        deliver_count_total: "32",
        deliver_count_wait: "2121"
      },
      done: {
        check_count_wait: '6565',
        check_count_today: '323',
        check_count_total: '767745'
      }
    };
    cardList.value = res[taskStatus]
  }
  return {
    cardList,
    getCardListData,
  }
}
// 标题头
function usePreviewTitle() {
  const preview_title = reactive(PREVIEW_TITLE);
  return {
    preview_title
  }
}




// 展示表格
function useTable() {
  const tableData = ref([])

  const requestTableData = (query) => {
    const { taskStatus, typeStatus } = query
    const name = `${typeStatus}_${taskStatus}`
    const res = {
      company_pending: [
        {
          building_name: "company1",
          deliver_count_wait: "23"
        },
        {
          building_name: "company2",
          deliver_count_wait: "85"
        },
        {
          building_name: "company3",
          deliver_count_wait: "8"
        }
      ],
      company_done: [
        {
          building_name: "company4",
          deliver_count_wait: "5345"
        },
        {
          building_name: "company5",
          deliver_count_wait: "878"
        },
      ],
      building_pending: [
        {
          building_name: "building1",
          deliver_count_wait: "5454"
        },
        {
          building_name: "building2",
          deliver_count_wait: "121"
        },
        {
          building_name: "building3",
          deliver_count_wait: "3"
        },
        {
          building_name: "building4",
          deliver_count_wait: "89"
        },
        {
          building_name: "building5",
          deliver_count_wait: "53"
        },
        {
          building_name: "building6",
          deliver_count_wait: "23"
        }
      ],
      building_done: [
        {
          building_name: "building7",
          deliver_count_wait: "909"
        },
      ]
    }
    const value = JSON.parse(JSON.stringify(res[name]))
    value.forEach(v => {
      v.building_name = v.building_name.slice(0, 2) + Math.floor(Math.random() * 100)
      v.deliver_count_wait = String(Math.floor(Math.random() * 1000))
    })
    tableData.value = value
  }
  return {
    tableData,
    requestTableData,
  }
}
export {
  useTaskAndType,
  useForm,
  useBuildingList,
  useWarningTypeList,
  useStatusTypeList,
  useCardList,
  usePreviewTitle,
  useTable
}
