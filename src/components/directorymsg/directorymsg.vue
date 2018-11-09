<template>
  <div class="directoryBox">
      <div class="btnBox clearfix">
          <span class="ibox_title">基本信息</span>
          <button class="btn_add" @click="addContent">增加</button>
          <Modal          
            scrollable
            v-model="directoryModal"
            title="Add"
            class-name="vertical-center-modal"
            width=620px
            :loading="loading"
            @on-ok="asyncOK">
           <p>
            <Form :model="formRight" label-position="right" :label-width="100">
                <FormItem label="目录名">
                    <Input v-model="formRight.input1"></Input>
                </FormItem>
                <FormItem label="上级资源">
                    <Input v-model="formRight.input2"></Input>
                </FormItem>
            </Form>
            </p>
           </Modal>
      </div>
      <div class="tableBox">
          <!-- <table>
              <thead>
                  <tr>
                      <th>序号</th>
                      <th>目录名</th>
                      <th>上级资源</th>
                      <th>操作</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>云锦一</td>
                      <td>分类一</td>
                      <td>
                          <button class="btn_change" @click="changeContent">修改</button>
                          <button class="btn_delete" @click="delContent">删除</button>
                      </td>
                  </tr>
                   <tr>
                      <td>2</td>
                      <td>云锦一</td>
                      <td>分类一</td>
                      <td>
                          <button class="btn_change">修改</button>
                          <button class="btn_delete">删除</button>
                      </td>
                  </tr>
                   <tr>
                      <td>3</td>
                      <td>云锦一</td>
                      <td>分类一</td>
                      <td>
                         <button class="btn_change">修改</button>
                          <button class="btn_delete">删除</button>
                      </td>
                  </tr>
              </tbody>
          </table> -->
            <Table border :columns="columnsData" :data="data1"></Table>
      </div>

  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: '',
  data() { 
    return {
        directoryModal: false,
        loading: true,
        formRight: {
                    input1: '',
                    input2: '',
                },
        columnsData: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            // this.show(params.index)
                                            this.changeContent();
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            // this.remove(params.index)
                                            this.delContent();
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]

    }
  },
  methods: {
    asyncOK () {
        setTimeout(() => {
            this.directoryModal = false;
        }, 2000);
     },
    addContent(){
        this.directoryModal=true;
        this.formRight.input1="";
        this.formRight.input2="";
     },
    changeContent(){
        this.directoryModal=true;
        this.formRight.input1="目录目录目录目录目录目录目录";
        this.formRight.input2="资源资源资源资源资源资源资源";

     },
    delContent(){
         this.$Modal.confirm({
             title:"温馨提示",
             content:"确定要删除此项嘛?三思呀~",
             onOk:function(){
                 console.log("点击确定！");
             }
         })                
     },
    show (index) {
        this.$Modal.info({
            title: 'User Info',
            content: `Name：${this.data1[index].name}<br>Age：${this.data1[index].age}<br>Address：${this.data1[index].address}`
        })
     },
    remove (index) {
        this.data1.splice(index, 1);
     }
    }
 }
</script>

<style lang="" scoped>
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        
    }
    .vertical-center-modal .ivu-modal{
        top: 0;
    }
    .btnBox{
        border-bottom:2px solid #e7eaec;
    }
    .ibox_title{
        display: inline-block;
        line-height: 40px;
        margin-left: 20px;
        font-size: 18px;
        color: #797979;
        font-weight: 600;
    }
  .btn_add{
    float: right;
    margin: 8px 33px;
    line-height: 1 !important;
    padding: 6px 10px;
    font-size: 14px;
    color: #fff;
    background-color: #0fa2b3ba;
    border: none;
    border-radius: 3px;
    border-color: #05a8b3;
  }
  .tableBox{
    padding:20px;
    color:#676a6c;
  }
  .tableBox table{
    width:100%;
    border:1px solid #EBEBEB;
  }
  .tableBox table th,.tableBox table td{
    border:1px solid #ddd;
    padding:10px;
    text-align: center;
  }
  .tableBox table th{
      background-color: #F5F5F6;
      font-weight:600;
  }
  .btn_change,.btn_delete{
    line-height: 1 !important;
    padding: 6px 10px;
    font-size: 14px;
    color: #FC9023;
    background-color: #fff;
    border: 1px solid #FC9023;
    border-radius: 3px;
  }
  .btn_delete{
      border:1px solid #42A5EC !important;
      color:#42A5EC !important;
  }
</style>