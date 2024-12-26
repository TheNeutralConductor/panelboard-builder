const radios = document.getElementsByName("panelColor");
const rect1 = document.getElementById("rect1");
const breadcrumbs = document.querySelector(".breadcrumb");

const IPblock = document.querySelectorAll(".IP-block");
const pbColour = document.querySelectorAll(".pb-colour-circle");
const pbChassisSize = document.querySelectorAll("[data-chassis]");
const pbChassisImage = document.querySelector(".chassis-image");
const pbTopGlandPlate = document.getElementById("top-gland-plate");
const pbTopGlandImage = document.querySelector(".top-plate");
const pbBottomGlandPlate = document.getElementById("bottom-gland-plate");
const pbBottomGlandImage = document.querySelector(".bottom-plate");
const pbMainSwitch = document.getElementById("main-switch");
const pbMainSwitchImage = document.querySelector(".main-switch-image");
const pbPanelMetering = document.getElementById("panel-metering");
const pbHandles = document.querySelectorAll(".door-handle-image");
const pbSurgeDiverter = document.getElementById("surge-diverter");
const pbExtraDINRail = document.getElementById("din-rail");
const pbExtraDINRailImage = document.querySelector(".extra-din-rail-image");
const pbEmergencyLightTest = document.getElementById("emergency-light");
const pbEmergencyLightTestImage = document.querySelector(
  ".emergency-light-image"
);

pbExtraDINRail.addEventListener("click", (event) => {
  pbExtraDINRailImage.src = `/svg/extra-dinrail/pb_DIN-RAIL-${pbExtraDINRail.value}.svg`;
});

pbEmergencyLightTest.addEventListener("click", (event) => {
  if (pbEmergencyLightTest.value === "NONE") {
    document.querySelector(".emergency-light-test").classList.add("is-hidden");
    document.querySelector(".test-circuits").classList.add("is-hidden");
  } else {
    document
      .querySelector(".emergency-light-test")
      .classList.remove("is-hidden");
    document.querySelector(".test-circuits").classList.remove("is-hidden");
    pbEmergencyLightTestImage.src = `/svg/emergency-test/pb_Emergency-Exit-Lighting-Test-${pbEmergencyLightTest.value}.svg`;
  }
});

pbSurgeDiverter.addEventListener("click", (event) => {
  if (pbSurgeDiverter.value === "NONE") {
    document.querySelector(".surge-block").classList.add("is-hidden");
  } else {
    document.querySelector(".surge-block").classList.remove("is-hidden");
  }
});

pbHandles.forEach((handle) => {
  handle.addEventListener("click", (event) => {
    let containsActive = event.target.classList.contains("active");
    let activeExists = document.querySelectorAll(
      ".door-handle-image.active"
    ).length;
    if (containsActive) {
      document
        .querySelector(`.door-handle-image.active`)
        .classList.remove("active");
    } else if (activeExists > 0) {
      document
        .querySelector(`.door-handle-image.active`)
        .classList.remove("active");
      event.target.classList.add("active");
    } else {
      event.target.classList.add("active");
    }
  });
});

breadcrumbs.addEventListener("click", (e) => {
  let breadSelect = e.target.attributes["data-breadcrumb"].value;
  let existingSelection = document
    .querySelector(`.active[data-breadcrumb]`)
    .getAttribute("data-breadcrumb");

  if (existingSelection != breadSelect) {
    document
      .querySelector(`.active[data-breadcrumb]`)
      .classList.remove("active");
    document
      .querySelector(`[data-breadcrumb="${breadSelect}"]`)
      .classList.add("active");
    document.querySelectorAll("section[data-content]").forEach((sect) => {
      sect.classList.add("is-hidden");
    });
    document
      .querySelector(`section[data-content="${breadSelect}"]`)
      .classList.remove("is-hidden");
    console.log(e.target.attributes["data-breadcrumb"].value);
  }
});

radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    if (event.target.value == "X15") {
      rect1.style.fill = "#E26B20";
    } else if (event.target.value == "N42") {
      rect1.style.fill = "#8C948B";
    } else if (event.target.value == "RAL7035") {
      rect1.style.fill = "#C5C7C4";
    }
    // console.log(`Selected: ${event.target.value}`);
  });
});

pbPanelMetering.addEventListener("click", (event) => {
  if (pbPanelMetering.value === "NONE") {
    document.querySelector(".single-metering").classList.remove("is-flex");
    document.querySelector(".single-metering").classList.add("is-hidden");
    document.querySelector(".dual-metering").classList.remove("is-flex");
    document.querySelector(".dual-metering").classList.add("is-hidden");
    document.querySelector(".triple-metering").classList.remove("is-flex");
    document.querySelector(".triple-metering").classList.add("is-hidden");
  } else if (pbPanelMetering.value === "Meter1") {
    document.querySelector(".single-metering").classList.add("is-flex");
    document.querySelector(".single-metering").classList.remove("is-hidden");
    document.querySelector(".dual-metering").classList.remove("is-flex");
    document.querySelector(".dual-metering").classList.add("is-hidden");
    document.querySelector(".triple-metering").classList.remove("is-flex");
    document.querySelector(".triple-metering").classList.add("is-hidden");
  } else if (pbPanelMetering.value === "Meter2") {
    document.querySelector(".single-metering").classList.remove("is-flex");
    document.querySelector(".single-metering").classList.add("is-hidden");
    document.querySelector(".triple-metering").classList.remove("is-flex");
    document.querySelector(".triple-metering").classList.add("is-hidden");
    document.querySelector(".dual-metering").classList.remove("is-hidden");
    document.querySelector(".dual-metering").classList.add("is-flex");
  } else if (pbPanelMetering.value === "Meter3") {
    document.querySelector(".single-metering").classList.remove("is-flex");
    document.querySelector(".single-metering").classList.add("is-hidden");
    document.querySelector(".dual-metering").classList.remove("is-flex");
    document.querySelector(".dual-metering").classList.add("is-hidden");
    document.querySelector(".triple-metering").classList.remove("is-hidden");
    document.querySelector(".triple-metering").classList.add("is-flex");
  }
});

pbMainSwitch.addEventListener("click", (event) => {
  if (pbMainSwitch.value === "NONE") {
    pbMainSwitchImage.src = ``;
  } else {
    pbMainSwitchImage.src = `/svg/main-switch/pb_${pbMainSwitch.value}.svg`;
  }
});

pbTopGlandPlate.addEventListener("click", (event) => {
  pbTopGlandImage.src = `/svg/gland-plate/Chassis_Gland_Plate_${pbTopGlandPlate.value}.svg`;
});

pbBottomGlandPlate.addEventListener("click", (event) => {
  pbBottomGlandImage.src = `/svg/gland-plate/Chassis_Gland_Plate_${pbBottomGlandPlate.value}.svg`;
});

pbChassisSize.forEach((pbchassis) => {
  pbchassis.addEventListener("click", (event) => {
    let selected = event.target.getAttribute("data-chassis");
    pbChassisImage.src = `/svg/chassis/Busbar${selected}.svg`;
    if (!document.querySelector(`[data-chassis].active`)) {
      // check for null
      event.target.classList.add("active");
    } else {
      document
        .querySelector(`[data-chassis].active`)
        .classList.remove("active");
      event.target.classList.add("active");
    }
  });
});

pbColour.forEach((pbc) => {
  pbc.addEventListener("click", (event) => {
    let containsActive = event.target.classList.contains("active");
    let activeExists = document.querySelectorAll(
      ".pb-colour-circle.active"
    ).length;
    if (containsActive) {
      document
        .querySelector(`.pb-colour-circle.active`)
        .classList.remove("active");
    } else if (activeExists > 0) {
      document
        .querySelector(`.pb-colour-circle.active`)
        .classList.remove("active");
      event.target.classList.add("active");
    } else {
      event.target.classList.add("active");
    }
  });
});

IPblock.forEach((ipb) => {
  ipb.addEventListener("click", (event) => {
    let containsActive = event.target.classList.contains("active");
    let activeExists = document.querySelectorAll(".IP-Rating.active").length;
    if (containsActive) {
      document.querySelector(`.IP-Rating.active`).classList.remove("active");
    } else if (activeExists > 0) {
      document.querySelector(`.IP-Rating.active`).classList.remove("active");
      event.target.classList.add("active");
    } else {
      event.target.classList.add("active");
    }
  });
});
