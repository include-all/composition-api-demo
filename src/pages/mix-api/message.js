// message.js
import { ref, watch } from "@vue/composition-api";
export function message(props) {
  let msg = ref(props.msg);
  watch(msg, (newVal) => {
    console.log("msg changed", newVal);
  });
  const changeMessage = () => {
    msg.value = Math.floor(Math.random() * 100);
    console.log(this)
  };
  return { msg, changeMessage };
}
