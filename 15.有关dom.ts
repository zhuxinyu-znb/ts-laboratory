// interface HTMLElementTagNameMap {
//   a: HTMLAnchorElement;
//   abbr: HTMLElement;
//   address: HTMLElement;
//   applet: HTMLAppletElement;
//   area: HTMLAreaElement;
//   article: HTMLElement;
//   input: HTMLInputElement;
// }
//设置dom元素

const textEl = document.querySelector<HTMLInputElement>('input');
if (textEl !== null) {
  textEl.addEventListener('click', (e) => {
    console.log(e.clientX);
  });
  console.log(textEl.value);
}

const textel1 = document.querySelector('input') as HTMLInputElement;
console.log(textel1.value);

const textEl3 = document.querySelector('input');
console.log(textEl3!.value);
