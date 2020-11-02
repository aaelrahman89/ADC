import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend ,configure } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
import { required, email,max} from "vee-validate/dist/rules";

extend("required", required);
extend("email", email);
extend('max',max);
export default function VeeValidatePlugin({ app }) {
  configure({
    defaultMessage: (_, values) =>
      app.i18n.t(`validations.${values._rule_}`, values)
  });
}

// Add a rule.


// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
