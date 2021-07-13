<template>
  <div>
          <template>
            购物车
          </template>
        <div class="cart-box">
         <div class="cart-body">

           <van-checkbox-group ref="checkboxGroup">
               <div class="good-item">
                 <van-checkbox :name="a"/>
                 <div class="good-img"><img src="../assets/images/11.png"></div>
                 <div class="good-desc">
                   <div class="good-title">
                     <span>{{ APPLE }}</span>
                     <span>x100</span>
                   </div>
                   <div class="good-btn">
                     <div class="price"><small>¥</small>99.00</div>
                     <van-stepper integer :min="1" :max="10" :model-value="10" name="item.id" async-change />
                   </div>
                 </div>
               </div>
           </van-checkbox-group>
           
           
           <van-checkbox-group ref="checkboxGroup">
             <div class="good-item">
               <van-checkbox :name="a"/>
               <div class="good-img"><img src="../assets/images/11.png"></div>
               <div class="good-desc">
                 <div class="good-title">
                   <span>{{ APPLE }}</span>
                   <span>x100</span>
                 </div>
                 <div class="good-btn">
                   <div class="price"><small>¥</small>99.00</div>
                   <van-stepper integer :min="1" :max="10" :model-value="10" name="item.id" async-change />
                 </div>
               </div>
             </div>
           </van-checkbox-group>
           
           
           <van-checkbox-group ref="checkboxGroup">
             <div class="good-item">
               <van-checkbox :name="a"/>
               <div class="good-img"><img src="../assets/images/11.png"></div>
               <div class="good-desc">
                 <div class="good-title">
                   <span>{{ APPLE }}</span>
                   <span>x100</span>
                 </div>
                 <div class="good-btn">
                   <div class="price"><small>¥</small>99.00</div>
                   <van-stepper integer :min="1" :max="10" :model-value="10" name="item.id" async-change />
                 </div>
               </div>
             </div>
           </van-checkbox-group>
           

         </div>
         <van-submit-bar class="submit-all" :price="total * 100" @submit="onSubmit" button-text="结算">
           <van-checkbox >全选</van-checkbox>
         </van-submit-bar>


        </div>

      </div>
</template>

<script>
 import axios from "axios";
 
export default {
  name: "cart",
  data() {
      return {
        goods: [],
      }
    },
   mounted() {
      axios.get("http://ywpiez.natappfree.cc/goods/allGoods")
          .then(res => {
            this.goods = res.data.data;
            console.log(res.data);
          })
    },
}
</script>

<style scoped lang="scss">
.cart-box {
  .cart-body {
    margin: 60px 0 100px 0;
    padding-left: 10px;
    .good-item {
      display: flex;
      .good-img {
        img {
          width:100px;
          height:auto;
        }
      }
      .good-desc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 20px;
        .good-title {
          display: flex;
          justify-content: space-between;
        }
        .good-btn {
          display: flex;
          justify-content: space-between;
          .price {
            font-size: 16px;
            color: red;
            line-height: 28px;
          }
          .van-icon-delete {
            font-size: 20px;
            margin-top: 4px;
          }
        }
      }
    }
    .delete-button {
      width: 50px;
      height: 100%;
    }
  }
  .empty {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-top: 200px;
    .empty-cart {
      width: 150px;
      margin-bottom: 20px;
    }
    .van-icon-smile-o {
      font-size: 50px;
    }
    .title {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  .submit-all {
    margin-bottom: 50px;
    .van-checkbox {
      margin-left: 0px
    }
    .van-submit-bar__text {
      margin-right: 10px
    }
    .van-submit-bar__button {
      background:red;
    }
  }
  .van-checkbox__icon--checked .van-icon {
    background-color:red;
    border-color: red;
  }
}
</style>
