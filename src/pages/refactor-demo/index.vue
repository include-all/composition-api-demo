<template lang="pug">
  .main
    .filter
      el-tabs(v-model="taskStatus" @tab-click='changeTaskStatus')
        el-tab-pane(label="待处理" name="pending")
        el-tab-pane(label="已处理" name="done")
      el-radio-group(v-model="typeStatus" @change="changeType")
        el-radio-button(label="building") 按building
        el-radio-button(label="company") 按company
      el-form(label-suffix=':')
        template(v-if="typeStatus === 'company'")
          el-form-item(label="company名称")
            el-input(v-model="query.company_name")
          el-form-item(label="所在building")
            el-select(v-model="query.building_id" placeholder='请选择')
              el-option(v-for="(item, index) in buildingList" :key="index"
                :label="item.building_name" :value='item.building_id')
          el-form-item(label="类型")
            el-select(v-model="query.warning_type" placeholder='请选择')
              el-option(v-for="(item, index) in warningTypeList" :key="index"
                :label="item.name" :value='item.code')
          el-form-item(v-if="taskStatus === 'done'" label="状态")
            el-select(v-model="query.status" placeholder='请选择')
              el-option(v-for="(item, index) in statusTypeList" :key="index"
                :label="item.name" :value='item.code')
        el-form-item(v-else label="building名称")
          el-input(v-model="query.building_name")
        el-form-item
          el-button(@click="resetFormAndTable") 重置
          el-button(@click="searchTableData") 查询
    .content
      .card-wrap
        .card(v-for="(value, key) in cardList")
          div {{value}}
          div {{preview_title[taskStatus][key]}}
      .table-wrap
        p {{tableTitle}}
        TestTable(ref="testTable" :config="config" :data="tableData")
</template>

<script>
import { ref, reactive, onMounted, computed } from "@vue/composition-api";
import { STATUS_TYPE_LIST } from "./option";
import {
  useTaskAndType,
  useForm,
  useBuildingList,
  useWarningTypeList,
  useStatusTypeList,
  useCardList,
  usePreviewTitle,
  useTable
} from "./composition";
import TestTable from "./table";
export default {
  components: {
    TestTable
  },
  setup(props, context) {
    console.log(context);
    const {
      taskStatus,
      typeStatus,
      status,
      tableTitle,
      config
    } = useTaskAndType();
    const { query, resetForm } = useForm();
    const { buildingList, getBuildingList } = useBuildingList();
    const { warningTypeList } = useWarningTypeList();
    const { statusTypeList } = useStatusTypeList(STATUS_TYPE_LIST);
    const { cardList, getCardListData } = useCardList();
    const { preview_title } = usePreviewTitle();
    const { tableData, requestTableData } = useTable();
    /**================setup只做api的组合========================= */
    onMounted(() => {
      getBuildingList({ status: status.value });
      getCardListData({ taskStatus: taskStatus.value });
      searchTableData();
    });
    const changeTaskStatus = () => {
      getBuildingList({ status: status.value });
      getCardListData({ taskStatus: taskStatus.value });
      resetForm();
      searchTableData();
    };
    const changeType = () => {
      resetForm();
      searchTableData();
      console.log(context);
    };
    const resetFormAndTable = () => {
      resetForm();
      searchTableData();
    };
    const searchTableData = () => {
      requestTableData({
        ...query,
        typeStatus: typeStatus.value,
        taskStatus: taskStatus.value
      });
    };
    return {
      taskStatus,
      typeStatus,
      tableTitle,
      config,
      query,
      buildingList,
      warningTypeList,
      statusTypeList,
      cardList,
      preview_title,
      tableData,
      // =========
      changeTaskStatus,
      changeType,
      resetFormAndTable,
      searchTableData
    };
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 1000px;
  margin: 10px;
  display: flex;
  .filter {
    flex-basis: 230px;
    padding: 5px 10px;
    margin-right: 10px;
    border: 1px solid #16618b;
    border-radius: 5px;
    .el-select {
      width: 100%;
    }
  }
  .content {
    flex-basis: 550px;
    padding: 5px 10px;
    border: 1px solid #16618b;
    border-radius: 5px;
    .card-wrap {
      display: flex;
      .card {
        flex: 1;
        padding: 20px;
        border: 1px solid #16618b;
        border-radius: 5px;
        margin: 10px;
      }
    }
  }
}
</style>
