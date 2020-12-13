import { defineComponent } from "vue";
import "./index.less";

export default defineComponent({
  name: "YurBadge",
  props: {
    type: {
      type: String,
      default: "tip",
    },
    text: {
      type: String,
      default: "",
    },
    vertical: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const type = props.type;
    const text = props.text;
    const vertical = props.vertical;
    return (
      <span
        class={{
          "yur-badge": true,
          [type]: !!type,
        }}
        style={{
          verticalAlign: vertical,
        }}
      >
        {text}
      </span>
    );
  },
});
