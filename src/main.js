import "./scss/main.scss";
import "./static/images/alpha-shop-Logo.png";

// 導入配置資料
import {
  // headerList,
  // headerIcons,
  stepperItems,
  formShippingAddressInputFields,
  paymentInfoInputFields,
  titleItems,
  citiesItems,
  productInfo,
  shippingMethods,
  footerInformation,
} from "./config/pageConfigs";

// 設定一個當前的 step
let currentStep = 1;

// header 左側選單
// const list = document.querySelector(".header__header-list");
//header 右側icon
// const iconList = document.querySelector(".header__action-row");

// stepper
const stepper = document.querySelector("#stepper");

// container 左側
const subTitle = document.querySelector("#sub-title");
const formPanel = document.querySelector(".form-panel");

// container 右側 cart
const productPanel = document.querySelector(".product-panel");

//
// 導入 header 左側選單資料
// 把陣列 headerList 用 map 迴圈導入後，用 join 合併字串列
// const listContent = headerList.map((item) => `<li>${item}</li>`).join("");
// const iconContent = headerIcons.map((icon) => `<img src="${icon}">`).join("");
// list.innerHTML = listContent;
// iconList.innerHTML = iconContent;

// stepper
const getStepper = () => {
  stepper.innerHTML = "";
  let stepperContent = "";

  // 從 pageConfiggs.js 裡，找到 stepperItems 這個 data 來做 forEach
  stepperItems.forEach((step) => {
    stepperContent += `
    <div class="stepper">
      <div class="stepper__circle${
        // 如果 step.id === currentStep 或 step.isFinished 這兩個條件其一成立的話 就加上 "__active" 否則加上 ""
        step.id === currentStep || step.isFinished ? "__active" : ""
      }">
      ${
        // step.isFinished 如果為 true 回傳 "&#10004;" 否則回傳 step.id
        step.isFinished ? "&#10004;" : step.id
      }
      </div>
      <p class="stepper__text">${step.name}</p>
    </div>
    ${step.id !== 3 ? `<div class="stepper__line"></div>` : ""}`;
  });
  stepper.innerHTML = stepperContent;
};

// get subTitle, container 左側
const getSubTitle = () => {
  subTitle.innerHTML = "";
  // 從 stepperItems 裡找到等於當前 step.id 裡面的 name
  const subTitleContent = stepperItems.find(
    (item) => item.id === currentStep
  ).name;
  subTitle.innerText = subTitleContent;
};

// get formContent, container 左側
const getFormContent = () => {
  formPanel.innerHTML = "";

  const formContentBottom = "</form>";

  let formContent = "";
  let titleOptions = "";
  let citiesOptions = "";

  // 下拉式選單 ( 稱謂: 先生 / 小姐 )
  titleItems.forEach(
    (option) =>
      (titleOptions += `<option value="${option.id}">
      ${option.name}
    </option>
    `)
  );

  // 下拉式選單 ( 城市: 台北市 / 高雄市 )
  citiesItems.forEach(
    (option) =>
      (citiesOptions += `<option value="${option}">
      ${option}
    </option>
    `)
  );

  switch (currentStep) {
    // 計送地址 form
    case 1:
      formShippingAddressInputFields.forEach((item, index) => {
        if (item.placeholder === "") {
          // 如果.placeholder === "" 就是下拉式選單 formContent
          // ${index + 1} 從 0 開始，順序 + 1，對應到 scss input-123456
          formContent += `
        <form class="form-panel__row">
        <div class="form-panel__row__input-field form-panel__row__input-${
          index + 1
        }">
          <label for="${item.id}">
            ${item.title}
          </label>
          <select
            id="${item.id}"
            name="${item.id}" class="form-panel__row__input-field__select">
            ${item.id === "title" ? titleOptions : citiesOptions}
          </select>
          <i class="form-panel__row__input-field__icon"></i>
        </div>
        `;
        } else {
          // input formContent
          formContent += `
        <form class="form-panel__row">
        <div class="form-panel__row__input-field form-panel__row__input-${
          index + 1
        }">
          <label for="${item.id}">
            ${item.title}
          </label>
          <input
            id="${item.id}"
            name="${item.id}"
            type="text"
            placeholder="${item.placeholder}" />
        </div>
        `;
        }
      });
      break;

    // 運送方式 form
    case 2:
      shippingMethods.forEach((item) => {
        formContent += `
      <form class="form-panel__radio-btn-group">
        <label class="radio-container form-panel__radio-btn-group__option">
          <div class="form-panel__radio-btn-group__option__description">
            <p>${item.title}</p>
            <p>${item.description}</p>
          </div>
          <input type="radio" name="radio">
          <span class="checkmark"></span>
        </label>
      `;
      });
      break;

    // 付款資訊 form
    case 3:
      paymentInfoInputFields.forEach((item, index) => {
        formContent += `
        <form class="form-panel__row">
        <div class="form-panel__row__input-field form-panel__row__step-3__input-${
          index + 1
        }">
          <label for="${item.id}">
            ${item.title}
          </label>
          <input
            id="${item.id}"
            name="${item.id}"
            type="text"
            placeholder="${item.placeholder}" />
        </div>
        `;
      });
  }

  formPanel.innerHTML = formContent + formContentBottom;
  // ※※※※※
  if (currentStep === 2) {
    const radioOption = document.querySelectorAll(
      ".form-panel__radio-btn-group__option"
    );

    radioOption.forEach((option) => {
      option.addEventListener("click", () => {
        for (let i = 0; i < radioOption.length; i++) {
          radioOption[i].classList.remove(
            "form-panel__radio-btn-group__option__checked"
          );
        }
        option.classList.add("form-panel__radio-btn-group__option__checked");
      });
    });
  }
};

const getProductInfo = () => {
  productPanel.innerHTML = "";
  let productContent = "";

  productInfo.forEach(
    (item) =>
      (productContent += `
  <div class="product-panel__product">
    <img src="${item.image}" />
    <div class="product-panel__product__info">
      <div>
        <p>${item.name}</p>
        <div class="product-panel__button-group">
          <button class="product-panel__button-group__minus">
            -
          </button>
          <p>1</p>
          <button class="product-panel__button-group__plus">
            +
          </button>
        </div>
      </div>
      <p>$${item.price}</p>
    </div>
  </div>
  `)
  );

  productPanel.innerHTML = productContent;
};

const getActionButtonGroupContent = () => {
  const buttonGroup = document.querySelector(".action-button-group");

  let buttonGroupContent = "";
  buttonGroup.innerHTML = "";

  if (currentStep === 1) {
    buttonGroupContent += `
    <div class="action-button-group__previous"></div>
    <button class="action-button-group__next">
      下一步
      <div class="action-button-group__line-right"></div>
      <div class="action-button-group__arrow-right"></div>
    </button>
    `;
  } else if (currentStep === 3) {
    buttonGroupContent += `
    <button class="action-button-group__previous">
      <div class="action-button-group__arrow-left"></div>
      <div class="action-button-group__line-left"></div>
      上一步
    </button>
    <button class="action-button-group__next">
      確認下單
    </button>
    `;
  } else {
    buttonGroupContent += `
    <button class="action-button-group__previous">
      <div class="action-button-group__arrow-left"></div>
      <div class="action-button-group__line-left"></div>
      上一步
    </button>
    <button class="action-button-group__next">
      下一步
      <div class="action-button-group__line-right"></div>
      <div class="action-button-group__arrow-right"></div>
    </button>
    `;
  }

  buttonGroup.innerHTML = buttonGroupContent;

  const nextButton = document.querySelector(".action-button-group__next");
  const prevButton = document.querySelector(".action-button-group__previous");

  nextButton.addEventListener("click", () => {
    if (currentStep !== 3) {
      stepperItems[currentStep - 1].isFinished = true;
      currentStep = currentStep + 1;
      getFullWhenLoaded();
    } else return;
  });

  prevButton.addEventListener("click", () => {
    if (currentStep !== 1) {
      stepperItems[currentStep - 2].isFinished = false;
      currentStep = currentStep - 1;
      getFullWhenLoaded();
    } else return;
  });
};

const getFullWhenLoaded = () => {
  // getHeaderList()
  getSubTitle();
  getStepper();
  getFormContent();
  getProductInfo();
  getActionButtonGroupContent();
  // getFooterContent()
};

getFullWhenLoaded();
