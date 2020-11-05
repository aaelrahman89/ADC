<template>
    <div class="offers-book-now">
        <h3 class="mb-44 mt-2 text-center text-capitalize">Book your <br /> appointment now</h3>
        <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Mobile number">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
                <select class="form-control">
                    <option selected disabled>Choose the branch closest to you</option>
                    <option>branch name</option>
                    <option>branch name</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control">
                    <option selected disabled>Choose your offer</option>
                    <option>offer name</option>
                    <option>offer name</option>
                </select>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-warning border-0">Book Now</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  .offers-book-now{
      background-color: #f6f8f9;
      padding: 10px 40px;
      background-image: (url('~assets/images/search-logo-bg.png'));
      background-size: 194px 140px;
      background-repeat: no-repeat;
      background-position: center 10px;
      h3{
  font-size: 27px;
  font-weight: bold;
  color: #3d505d;
      }
      .form-group{
          margin: 10px 0px;
      }
      .form-control{
          border-radius: 5px;
  border: solid 2px #ebeded;
    font-size: 14px;
  color: #a6adb4;
  &::placeholder{
color: #a6adb4;
  }
      }
      button{
          color: #fff;
          font-weight: bold;
            width: 150px;
  height: 40px;
  background-color: #f39e25;
      }
      .mb-44{
         margin-bottom: 4.5rem !important;
      }
  }
</style>