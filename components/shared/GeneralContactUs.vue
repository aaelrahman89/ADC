<template>
  <div class="hold-contact-us">
    <transition name="slide-fade">
      <div class="success-message" v-if="showMessage">
        you'r request sent successfully
      </div>
    </transition>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-4 col-12 contact-info">
          <div class="row">
            <div class="col-2 text-center">
              <i class="far fa-map"></i>
            </div>
            <div class="col-10">
              <p class="header-info">location :</p>
              <p class="sub-info">sanabel st.jaddah, saudi arabia</p>
            </div>
            <div class="col-2 text-center">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="col-10">
              <p class="header-info">Telephone :</p>
              <a class="sub-info" href="tel:+966 126 251 255">+966 126 251 255</a>
            </div>
            <div class="col-2 text-center">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="col-10">
              <p class="header-info">Email Address :</p>
              <a class="sub-info" href="mailto:clinicssanabel@andalusiaegypt.com">clinicssanabel@andalusiaegypt.com</a>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-12">
          <ValidationObserver v-slot="{ invalid }" ref="contactForm"  class="d-block">
            <div class="row">
              <div class="col-12">
                <form @submit.prevent="onSubmit">
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <ValidationProvider name="Name" rules="required" v-slot="{ errors }" class="general-input">
                        <input v-model="contactInfo.name" type="text" :placeholder="$t('contact.name')">
                        <span class="error-message">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6 col-12">
                      <ValidationProvider name="phone" rules="required|max:10" v-slot="{ errors }" class="general-input">
                        <input v-model="contactInfo.phone" type="number" :placeholder="$t('contact.phone')">
                        <span class="error-message">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-12">
                      <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }" class="general-input">
                        <input v-model="contactInfo.email" type="email" :placeholder="$t('contact.email')">
                        <span  class="error-message">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-12 text-area-div">
                      <ValidationProvider name="Message" rules="required" v-slot="{ errors }" class="contact-text-area">
                        <textarea v-model="contactInfo.message" :placeholder="$t('contact.message')"></textarea>
                        <span  class="error-message">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-12">
                      <button type="submit" :disabled="invalid" class="send-btn send-btn-home">
                        {{ $t('Send Message') }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {contactUsObj} from "@/mixin/contactUsMixin";
import axios from "axios";
export default {
  name: "GeneralContactUs",
  mixins:[contactUsObj],
  methods:{
  }
}
</script>

<style scoped lang="scss">
.hold-contact-us{
  background:#f7f7f7
}
.send-btn-home{
  background: #4c892d;
  margin: 0 auto 0 0;
  border-radius: .3rem;
  padding: .5rem 2rem;
  color: #fff;
  height: 45px;
  font-size: 1rem;
  &:disabled{
    background: #397944d9;
  }
}
.contact-info{
  background: #fff;
  border-radius: .3rem;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    background: transparent;
    display: block;
    font-size: .8rem;
    margin-bottom: 1rem;
  }
}
.fa-map,.fa-phone-alt,.fa-envelope{
  color: #4c892d;
  font-size: 1.8rem;
  margin-top: 1.2rem;
}
</style>
