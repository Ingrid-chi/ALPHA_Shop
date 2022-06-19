import "./scss/main.scss";
import "../img/cart-product-img-1.png";
import "../img/cart-product-img-2.png";

console.log("JS loaded!");

const stepperPanel = document.querySelector(".stepper-panel__container");
const formPanel = document.querySelector(".form-panel");
const btnPanel = document.querySelector(".btn-panel");

let currentStage = 1;

const getStepper = () => {
  stepperPanel.innerHTML = "";
  let stepperPanelContent = "";

  stepperPanelContent += `
  <div class="step checked">
    <div class="step-circle"></div>
    <div class="desktop step-label checked">寄送地址</div>
  </div>

  <div class="step-line"></div>
    <div class="step active">
    <div class="step-circle"></div>

    <div class="desktop step-label active">運送方式</div>
  </div>

  <div class="step-line"></div>
  <div class="step">
    <div class="step-circle"></div>
    <div class="desktop step-label">付款資訊</div>
  </div>
  `;

  stepperPanel.innerHTML = stepperPanelContent;
};

const getFormContent = () => {
  formPanel.innerHTML = "";
  let formPanelContent = "";

  // form 1
  if (currentStage === 1) {
    formPanelContent += `
      <h2>寄送地址</h2>
            <div class="form-panel__container">
              <div class="form-panel__container__title">
                <label class="form-label">稱謂</label>

                <select
                  name="appellation"
                  id="appellation"
                  class="form-appellation"
                >
                  <option value="male" disabled selected>先生</option>
                  <option value="female">小姐</option>
                </select>
              </div>

              <div class="form-panel__container__name">
                <label class="form-label">姓名</label>
                <input
                  id="name"
                  type="text"
                  class="form-name w-183"
                  placeholder="請輸入姓名"
                />
              </div>

              <div class="form-panel__container__phone">
                <label class="form-label">電話</label>
                <input
                  id="phone"
                  type="text"
                  class=""
                  placeholder="請輸入行動電話"
                />
              </div>

              <div class="form-panel__container__email">
                <label class="form-label">Email</label>
                <input
                  id="Email"
                  type="text"
                  class=""
                  placeholder="請輸入電子郵件"
                />
              </div>

              <div class="form-panel__container__local">
                <label class="form-label">縣市</label>
                <select name="local" id="local">
                  <option value="local" disabled selected>請選擇縣市</option>
                  <option value=""></option>
                </select>
              </div>

              <div class="form-panel__container__address">
                <label class="form-label">地址</label>
                <input
                  id="address"
                  type="text"
                  class=""
                  placeholder="請輸入地址"
                />
              </div>
            </div>
  `;
  }

  // form 2
  else if (currentStage === 2) {
    formPanelContent += `
    <form class="form-panel__radio-btn-group">
      <div class="form-panel__radio-btn-group__option">
        <input
          type="radio"
          id="general"
          name="shipping-method"
          value="general"
        />
        <label for="shipping-method">
          <p>標準運送</p>
          <p>約 3~7 個工作天</p>
        </label>
        <p>免費</p>
      </div>

      <form class="form-panel__radio-btn-group">
      <div class="form-panel__radio-btn-group__option">
        <input
          type="radio"
          id="DHL"
          name="shipping-method"
          value="DHL"
        />
        <label for="shipping-method">
          <p>DHL 貨運</p>
          <p>48 小時內送達</p>
        </label>
        <p>$500</p>
      </div>
  `;
  }

  // form 3
  // else (currentStage === 3) {
  //   formPanelContent += `

  // `;
  // }

  formPanel.innerHTML = formPanelContent;
};

const renderFullPage = () => {
  getStepper();
  getFormContent();
};

renderFullPage();
