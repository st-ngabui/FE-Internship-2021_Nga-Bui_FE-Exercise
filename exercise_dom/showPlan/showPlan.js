//create array contain plan object;
const inforPlan = [
  {
    name: "Basic",
    planDetail: {
      price: "$10/month",
      users: "10 user included",
      storage: "2 GB storage",
      support: "Email support",
      help: "Help center access",
    },
    button: {
      text: "Get Started",
      type: "btn-outline",
    }
  },
  {
    name: "Pro",
    planDetail: {
      price: "$30/month",
      users: "100 user included",
      storage: "20 GB storage",
      support: "Priority email support",
      help: "Help center access",
    },
    button: {
      text: "Buy now",
      type: "btn-primary",
    }
  },
];

//create div Element wrap plans
const planWrap = document.createElement("div");
planWrap.setAttribute("class", "plan-wrap");
document.body.appendChild(planWrap);

//loop the inforPlan array
inforPlan.forEach ((plan) => {

  //create div element for plan
  let planItem = document.createElement("div");
  planItem.setAttribute("class", "plan-item");
  planWrap.appendChild(planItem);

  //create h4 element to show name plan
  let planTitle = document.createElement("h4");
  planTitle.setAttribute("class", "plan-title");
  planTitle.innerHTML = plan.name;
  planItem.appendChild(planTitle);

  //create ul element to contain plan infor
  let planInfo = document.createElement("ul");
  planInfo.setAttribute("class", "plan-info");
  planItem.appendChild(planInfo);

  //loop the planDetail object 
  for(planDetail in plan.planDetail) {
    //create li element to show plan information detail
    let planInfoDetail = document.createElement("li");
    planInfoDetail.setAttribute("class", "plan-info-detail");
    //check key has "price" or not 
    if(planDetail === "price" )planInfoDetail.setAttribute("id", "plan-price");
    planInfoDetail.innerHTML = plan.planDetail[planDetail];
    planInfo.appendChild(planInfoDetail);
  }
   
  //create button element
  let planBtn = document.createElement("button");
  planBtn.className = "btn " + plan.button.type;
  planBtn.innerHTML = plan.button.text;
  planItem.appendChild(planBtn);
})