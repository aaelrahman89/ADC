import axios from "axios";
export const contactUsObj = {
  data: () => ({
    showMessage:false,
    contactInfo:{
      name: '',
      phone: '',
      email: '',
      message: '',
    }
  }),
  methods: {
    onSubmit() {
      console.log(this.contactInfo);
      axios.post('/api/contactus',this.contactInfo).then(res =>{
        console.log(res.data);
        this.contactInfo.name = this.contactInfo.email = this.contactInfo.phone = this.contactInfo.message = '';
        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.contactForm.reset();
        });
        this.showMessage = true;
        setTimeout(() =>{
          this.showMessage = false;
        },4000)
      }).catch( error => console.log(error.data))
    }
  },
}
