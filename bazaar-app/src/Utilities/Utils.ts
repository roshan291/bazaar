
export const Roshan = "Roshan";
export const syed = "Syed"


export const onKeyPress= (e: any) => {
    const keyCode = e.charCode;
    if (!(keyCode >= 48 && keyCode <= 57)) {
      e.preventDefault();
    }
  }