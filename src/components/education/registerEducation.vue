<template>
  <div class="bg-white rounded-lg mt-8 ">
    <v-container>
      <v-form>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <div style="height: 100%;">
              <label for="username">نام:</label>
              <v-text-field class="mt-2"></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <div style="height: 100%;">
              <label for="username">ایمیل:</label>
              <v-text-field class="mt-2"></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" md="12">
            <label for="username">دیدگاه:</label>
            <v-textarea class="mt-2"></v-textarea>
          </v-col>
        </v-row>
        <div class="description-form">
          <div>
            <input type="checkbox" class="ml-2" id="checkbox">
            <label for="checkbox" class="checkbox-review">ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که
              دوباره دیدگاهی می‌نویسم.</label>
              </div>
              <div>
            <button class="sendview bg-blue-darken-4">ارسال دیدگاه</button>
            </div>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .description-form {
    display: flex;  
    justify-content: space-between;
  }

  .description-form p {
    font-size: 13px;
  }

  .checkbox-review {
    font-size: 12px;
  }

  .sendview {
    width: 61px;
    font-size: 9px;
    height: 23px;
    border-radius: 3px;
  }

  @media screen and (max-width:768px) {
    .sendview {
      top: 40px;
      float: left;
      
    }
    .description-form{
      display: flex;
      flex-direction: column;
    }

  }

</style>
