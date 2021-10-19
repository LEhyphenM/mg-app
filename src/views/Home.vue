<template>
  <fieldset>
    <div class="Home">
      <h2> {{ mgIntro }} </h2>
      <div class="intro" >
        <!-- <h3>{{ mgIntro }}</h3> -->
        <div class="col1">
          <img :src="`${mgUrl}`" class="mgImg" />
        </div>
        <div class="col2">
          <p>
            Mama Georgio has been perfecting her pasta since the ripe old age of six. 
            If you do not like her pasta, it will bring great shame upon her 
            and she will no longer be able to show her face at <b>Sauce Club</b>.
            Do not dishonor Mama Georgio. Eat the pasta or she will die of a broken heart.
          </p>
        </div>
      </div>
    </div>
  </fieldset>
  <!-- <section class="review">
    <div class="reviews" v-for="review of reviews" :key="review.id">
        <h3>{{ review.quote }}</h3>  
        <h3>{{ review.author }}</h3>
    </div>
  </section> -->
</template>

<script>
// const reviews = Object.freeze([
//   {
//     id: 1,
//     quote: "short quote",
//     author: "Name Name",
//   },
//   {
//     id: 2,
//     quote: "Short Quote",
//     author: "Name Name",
//   },
//   {
//     id: 3,
//     quote: "Short Quote",
//     author: "Name Name",
//   },
// ]);
export default {
  name: 'Home',
  // components: {
  // }, 
  data() {
    return {
      // coverUrl: "https://tinyurl.com/d93akmkx",
      mgIntro: "Mama Georgio",
      mgUrl: "https://tinyurl.com/xp3ktpxw",
      // reviews,
    }
  },
}
</script>

<style scoped lang="scss">
  @import "../scss/variables.scss";
  @import "../scss/mixins.scss";
  fieldset {
    // Styles carried over from App page
    .Home {
      @include storeCart();
      padding:0 30px 15px;
      h2, h3, h4 {
        @include defaultText();
      }
      h2 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-weight:900;
      }
      .intro {
        display: flex;
        flex-direction: row;
        .col1, .col2 {
          display: inline-flex;
          flex-direction: column;
          width: 100%;
          max-width: 200px;
          padding:0 14px;
          justify-content: center;
        }
        .col1 {
          .mgImg {
            border-radius:$size1;
          }
        }
        .col2 {
          p {
            font-size:17px;
            color:$primary;
          }
        }
      //   background-image:url(https://tinyurl.com/d93akmkx);
      //     background-position-y:-100px;
      //     background-position-x: center;
      //     background-size:cover;
      //     background-repeat:no-repeat;
      //     height:auto;
      //     max-height:100%;
      //     min-height:654px;
        // h3 {
        //   max-width: 400px;
        //   margin: $size1 auto;
        //   text-align: center;
        // }
      }
    }
  }
  // section.review {
  //   display: flex;
  //   flex-direction: row;
  //   background-color:#F0F2F2;

  //   .reviews {
  //     display: inline-flex;
  //     flex-direction: column;
  //     width: 100%;
  //   }
  // }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    fieldset {
      .Home {
        max-width:300px;
        .intro {
          display:grid;
          .col1, .col2 {
            // display:inline-grid;
            // display:initial;
            width:auto;
            max-width:300px;
            padding:0;
            text-align:center;
            margin: 0 auto;
          }
          .col1 .mgImg {
            max-width:222px;
          }
          .col2 p {
            max-width:300px
          }
        }
      }
    }
  }
</style>