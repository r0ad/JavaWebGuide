import { defineConfig } from "vitepress";

/**
 * 题库目录配置
 */
const tiku = {
  基础语法: {
    Q01: "什么是装箱？什么是拆箱？装箱和拆箱的执行过程？常见问题？",
    Q02: "Java语言有哪些特点",
  },
  JVM: {
    Q01: "简述一下JVM的内存模型",
    Q02: "什么是装箱？什么是拆箱？装箱和拆箱的执行过程？常见问题23333",
  },
  多线程和并发: {
    Q01: "什么是装箱？什么是拆箱？装箱和拆箱的执行过程？常见问题？",
    Q02: "什么是装箱？什么是拆箱？装箱和拆箱的执行过程？常见问题23333",
  }
};

/**
 * 
 * @returns 生成题库目录
 */
export function tikuGen() {
  const sidebar = [];
  for (let key in tiku) {
    const text = key;
    const itemObj = tiku[key];
    const items = [];
    for (let key2 in itemObj) {
      items.push({
        text: itemObj[key2],
        link: "/题库/" + text + "/" + key2,
      });
    }
    sidebar.push({
      text: text,
      collapsed: true,
      items: items,
    });
  }
  return sidebar
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Java Web Guide",
  description: "Java向全栈工程师面试题库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "题库", link: "/markdown-examples" },
    ],

    sidebar: [...tikuGen()],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
