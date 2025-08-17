<template>
  <div style="font-family: Arial; max-width: 720px; margin: 80px auto; text-align: center;">
    <h1>Calculadora Vue</h1>

    <input type="number" v-model.number="num1" placeholder="Número 1" />
    <select v-model="operacao">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input type="number" v-model.number="num2" placeholder="Número 2" />

    <h2>Resultado: {{ resultado }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      operacao: "+"
    };
  },
  computed: {
    resultado() {
      switch (this.operacao) {
        case "+":
          return this.num1 + this.num2;
        case "-":
          return this.num1 - this.num2;
        case "*":
          return this.num1 * this.num2;
        case "/":
          return this.num2 !== 0 ? (this.num1 / this.num2).toFixed(2) : "Erro";
        default:
          return 0;
      }
    }
  }
};
</script>


<style>

body{
  background-image: url('/image/bg-image.jpg'); /* coloque a imagem em public/fundo.jpg */
  background-repeat: no-repeat;        /* não repetir */
  background-size: cover;              /* cobre toda a tela */
  background-attachment: fixed;        /* fica fixo mesmo com scroll */
  background-position: center;         /* centraliza a imagem */

}
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 24px;
  margin: 80px auto;
  max-width: 720px;
  width: 100%;

  background: rgba(100, 211, 255, 0.199);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(2, 30, 46, 0.404);
  backdrop-filter: blur(14.9px);
  -webkit-backdrop-filter: blur(14.9px);
  border: 1px solid rgba(100, 211, 255, 0.46);
}

h1 {
  color: #ffffff;
}

.form {
  margin: 20px;
}

input, select {
  padding: 8px;
  margin: 6px;
  border-radius: 6px;
  border: 2px solid #00e1ff;
}

.resultado {
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  color: rgb(18, 255, 223);
}
</style>