//lang
let ita=document.getElementById("ita");
let eng=document.getElementById("eng");
// sex
let male=document.getElementById("male");
let maleV=false;
let female=document.getElementById("female");
let femaleV=false;
// eta
let eta=document.getElementById("eta");
// altezza
let altezza_div=document.getElementById("altezza_div");
let altezza_cm=document.getElementById("altezza");
let altezza_feet="";
let altezza_inch="";
let cm=document.getElementById("cm");
let cmV=true;
let feet=document.getElementById("feet");
let feetV=false;
// peso
let peso_div=document.getElementById("peso_div");
let peso=document.getElementById("peso");
let kg=document.getElementById("kg");
let kgV=true;
let lb=document.getElementById("lb");
let lbV=false;
let peso_lb=""; 
// fat
let fat_div=document.getElementById("fat_div");
let fat=document.getElementById("fat");
let fat_kg=""; 
let fat_lb="";
let percent_fat=document.getElementById("fat-percent");
let percent_fatV=true;
let kg_fat=document.getElementById("fat-kg");
let kg_fatV=false;
let lb_fat=document.getElementById("fat-lbs");
let lb_fatV=false;
// activity
let active1=document.getElementById("active1");
let active2=document.getElementById("active2");
let active3=document.getElementById("active3");
let active4=document.getElementById("active4");
let active5=document.getElementById("active5");
let active=0;
let submit=document.getElementById("invio");
let input_sex=document.getElementById("input_sex");
let input_age=document.getElementById("input_age");
let input_height=document.getElementById("input_height");
let input_weight=document.getElementById("input_weight");
let input_fat=document.getElementById("input_fat");
let input_activity=document.getElementById("input_activity");
// controllo
let error=false;


//lang
ita.addEventListener("click", ()=>{
    window.location.href = "http://127.0.0.1:5500/index.html";
});

eng.addEventListener("click", ()=>{
    window.location.href = "http://127.0.0.1:5500/index.html";
});

// sex

male.addEventListener("click", ()=>{
    female.classList.remove("button_active");
    femaleV=false;
    male.classList.add("button_active");
    maleV=true;
    console.log("male: "+maleV);
    console.log("female: "+femaleV);
});

female.addEventListener("click", ()=>{
    male.classList.remove("button_active");
    maleV=false;
    female.classList.add("button_active");
    femaleV=true;
    console.log("male: "+maleV);
    console.log("female: "+femaleV);
});

// height

cm.addEventListener("click", ()=>{
    if(cm.classList.length!=2){
        feet.classList.remove("button_active");
        feetV=false;
        cm.classList.add("button_active");
        cmV=true;
        console.log("cm: "+cmV);
        console.log("feet: "+feetV);
        
        console.log(altezza_div.innerHTML);
        altezza_div.innerHTML="";
        console.log(altezza_div.innerHTML);
        console.log("altezza feet: "+altezza_feet);
        console.log("altezza feet: "+altezza_feet.value);
        console.log("altezza inch: "+altezza_inch.value);
        altezza_feet.value="";
        altezza_inch.value="";
        console.log("nuova altezza feet: "+altezza_feet.value);
        console.log("nuova altezza inch: "+altezza_inch.value);

        altezza_div.innerHTML='<input class="height" id="altezza" type="number" min="30" max="302" placeholder="180">'+
            '<p>cm</p>';
    }
    
});

feet.addEventListener("click", ()=>{
    if(feet.classList.length!=2){
        cm.classList.remove("button_active");
        cmV=false;
        feet.classList.add("button_active");
        feetV=true;
        console.log("cm: "+cmV);
        console.log("feet: "+feetV);
        
        console.log(altezza_div.innerHTML);
        altezza_div.innerHTML="";
        console.log(altezza_div.innerHTML);
        console.log("altezza cm: "+altezza_cm.value);
        altezza_cm.value="";
        console.log("nuova altezza cm: "+altezza_cm.value);

        altezza_div.innerHTML='<input class="feet" id="altezza_feet" type="number" min="1" max="9" placeholder="6">'+
            '<p class="feet_p">feet</p>'+
            '<input class="inch" id="altezza_inch" type="number" min="0" max="11" placeholder="0" default="0">'+
            '<p>inch</p>';
        
        altezza_feet=document.getElementById("altezza_feet");
        altezza_inch=document.getElementById("altezza_inch");
    }
});

// weight

kg.addEventListener("click", ()=>{
    if(kg.classList.length!=2){
        lb.classList.remove("button_active");
        lbV=false;
        kg.classList.add("button_active");
        kgV=true;
        console.log("kg: "+kgV);
        console.log("lb: "+lbV);

        console.log(peso_div);
        console.log(peso_div.innerHTML);
        peso_div.innerHTML='<input class="height" id="peso" type="number" min="0" max="272" placeholder="70">'+
                            '<p>kg</p>';
        
        

        console.log("kg prima: "+peso_lb.value);
        peso_lb.value="";
        console.log("kg dopo: "+peso_lb.value);
        peso_lb=document.getElementById("peso_lb");
    }
});

lb.addEventListener("click", ()=>{
    if(lb.classList.length!=2){
        kg.classList.remove("button_active");
        kgV=false;
        lb.classList.add("button_active");
        lbV=true;
        console.log("kg: "+kgV);
        console.log("lb: "+lbV);

        console.log(peso_div);
        console.log(peso_div.innerHTML);
        peso_div.innerHTML='<input class="height" id="peso_lb" type="number" min="0" max="600" placeholder="154">'+
                            '<p>lb</p>';

        console.log("kg prima: "+peso.value);
        peso.value="";
        console.log("kg dopo: "+peso.value);
        peso_lb=document.getElementById("peso_lb");
    }
});

// fat

percent_fat.addEventListener("click", ()=>{
    if(percent_fat.classList.length!=2){
        kg_fat.classList.remove("button_active");
        kg_fatV=false;
        lb_fat.classList.remove("button_active");
        lb_fatV=false;
        percent_fat.classList.add("button_active");
        percent_fatV=true;
        console.log("percent fat: "+percent_fatV);
        console.log("kg fat: "+kg_fatV);
        console.log("lb fat: "+lb_fatV);

        console.log(fat_div);
        console.log(fat_div.innerHTML);
        fat_div.innerHTML='<b>*not obligatory</b>'+
                            '<input class="age" type="number" min="0" max="150" placeholder="15" id="fat">'+
                            '<p>%</p>';
        
        
        console.log("kg prima: "+fat_kg.value);
        console.log("lb prima: "+fat_lb.value);
        fat_kg.value="";
        fat_lb.value="";
        console.log("kg dopo: "+fat_kg.value);
        console.log("lb dopo: "+fat_lb.value);
    }
});

kg_fat.addEventListener("click", ()=>{
    if(kg_fat.classList.length!=2){
        percent_fat.classList.remove("button_active");
        percent_fatV=false;
        lb_fat.classList.remove("button_active");
        lb_fatV=false;
        kg_fat.classList.add("button_active");
        kg_fatV=true;
        console.log("percent fat: "+percent_fatV);
        console.log("kg fat: "+kg_fatV);
        console.log("lb fat: "+lb_fatV);

        console.log(fat_div);
        console.log(fat_div.innerHTML);
        fat_div.innerHTML='<b>*not obligatory</b>'+
                            '<input class="height" id="fat_kg" type="number" min="0" max="272" placeholder="10">'+
                            '<p>kg</p';

        fat_kg=document.getElementById("fat_kg");

        console.log("% prima: "+fat.value);
        console.log("lb prima: "+fat_lb.value);
        fat.value="";
        fat_lb.value="";
        console.log("% dopo: "+fat.value);
        console.log("lb dopo: "+fat_lb.value);
    }
});

lb_fat.addEventListener("click", ()=>{
    if(lb_fat.classList.length!=2){
        percent_fat.classList.remove("button_active");
        percent_fatV=false;
        kg_fat.classList.remove("button_active");
        kg_fatV=false;
        lb_fat.classList.add("button_active");
        lb_fatV=true;
        console.log("percent fat: "+percent_fatV);
        console.log("kg fat: "+kg_fatV);
        console.log("lb fat: "+lb_fatV);

        console.log(fat_div);
        console.log(fat_div.innerHTML);
        fat_div.innerHTML='<b>*not obligatory</b>'+
                            '<input class="height" id="fat_lb" type="number" min="0" max="600" placeholder="22">'+
                            '<p>lb</p>';
        
        fat_lb=document.getElementById("fat_lb");
        
        console.log("kg prima: "+fat_kg.value);
        console.log("% prima: "+fat.value);
        fat_kg.value="";
        fat.value="";
        console.log("kg dopo: "+fat_kg.value);
        console.log("% dopo: "+fat.value);
    }
});

//activity

active1.addEventListener("click", ()=>{
    active1.classList.add("button_active");
    active2.classList.remove("button_active");
    active3.classList.remove("button_active");
    active4.classList.remove("button_active");
    active5.classList.remove("button_active");
    console.log(active1.value);
    active=active1.value;

})

active2.addEventListener("click", ()=>{
    active2.classList.add("button_active");
    active1.classList.remove("button_active");
    active3.classList.remove("button_active");
    active4.classList.remove("button_active");
    active5.classList.remove("button_active");
    console.log(active2.value);
    active=active2.value;

})

active3.addEventListener("click", ()=>{
    active3.classList.add("button_active");
    active1.classList.remove("button_active");
    active2.classList.remove("button_active");
    active4.classList.remove("button_active");
    active5.classList.remove("button_active");
    console.log(active3.value);
    active=active3.value;

})

active4.addEventListener("click", ()=>{
    active4.classList.add("button_active");
    active2.classList.remove("button_active");
    active3.classList.remove("button_active");
    active1.classList.remove("button_active");
    active5.classList.remove("button_active");
    console.log(active4.value);
    active=active4.value;

})

active5.addEventListener("click", ()=>{
    active5.classList.add("button_active");
    active2.classList.remove("button_active");
    active3.classList.remove("button_active");
    active4.classList.remove("button_active");
    active1.classList.remove("button_active");
    console.log(active5.value);
    active=active5.value;
})

submit.addEventListener("click", controlla)

function controlla(){
    // console.log(eta.value);
    input_sex.classList.remove("input_error");
    input_age.classList.remove("input_error");
    input_height.classList.remove("input_error");
    input_weight.classList.remove("input_error");
    // input_activity.classList.remove("input_error");
    
    if(active==0){
        // input_activity.classList.add("input_error");
        // // console.log(input_activity.classList);
        // error=true;
        // // console.log(error);
    }
    if(peso_div.children[0].value==""){ 
        
        input_weight.classList.add("input_error");
        // console.log("peso: "+input_weight.classList);
        error=true;
        console.log(error);
        window.location.hash = '#input_weight';
    }else{
    console.log(peso_div.children[0].id)
    if(peso_div.children[0].id=="peso"){
        pesoC=peso_div.children[0].value;
    }else{ //lb
        pesoC=peso_div.children[0].value/2.205;
        // console.log("peso convertito in kg: "+pesoC);

    }

}
    if(altezza_div.children.length==2)
        {
            if(altezza_cm.value=="")
            {
                input_height.classList.add("input_error");
                // console.log(input_height.classList);
                error=true;
                console.log(error);
                window.location.hash = '#input_height';
            }
            else{
                altezzaC=altezza_cm.value;
            }
    }else{
        if(altezza_feet.value=="")
        {
            input_height.classList.add("input_error");
            // console.log(input_height.classList);
            error=true;
        }else{
            altezzaC=(altezza_feet.value*30.48)+(altezza_inch.value*2.54);
            // console.log("altezza convertita in cm: "+altezzaC);
        }
        
    }
    if(eta.value==""){
        input_age.classList.add("input_error");
        // console.log(input_age.classList);
        error=true;
        console.log(error);
        window.location.hash = '#input_age';
    }else{
        etaC=eta.value;
    }
    if(maleV==false && femaleV==false)
        {
            input_sex.classList.add("input_error");
            // console.log(input_sex.classList);
            error=true;
            console.log(error);
            window.location.hash = '#input_sex';
        } 

    console.log(fat_div.children[1].id);
    console.log(error);
    if(error==false)
    {

        crea_risultato();
    }
}

//calcolo
let etaC=0;
let altezzaC=0;
let pesoC=0;
//da arrotondare peso e altezza in unità

//risulato
let brmC=0;
let calorie_giornagliere=0;
let result_div_head=document.getElementById("result_head");
let result_div_body=document.getElementById("result_body");
let div_risultato_head="";
let div_risultato_body="";
let result_kcal="";


//macro
const carb_cal=4.1;
const pro_cal=4.1;
const fat_cal=9.3;

//tabella macro bmr
const percent_carb_bmr=50;
const percent_pro_bmr=20;
const percent_fats_bmr=30;

//lw
const percent_carb_lw=40;
const percent_pro_lw=30;
const percent_fats_lw=30;
//mw
const percent_carb_mw=50;
const percent_pro_mw=20;
const percent_fats_mw=30;
//gw
const percent_carb_gw=52.5;
const percent_pro_gw=20;
const percent_fats_gw=27.5;

let g_carb=0;
let g_pro=0;
let g_fats=0;

let kcal_carb=0;
let kcal_pro=0;
let kcal_fats=0;

    //fat da mettere dentro la funzione da lasciare dichiarati qui (="")
let tb_fat_percent="";
let tb_fat_g="";
let tb_fat_kcal="";
    //pro
let tb_pro_percent="";
let tb_pro_g="";
let tb_pro_kcal="";
    //carb
let tb_carb_percent="";
let tb_carb_g="";
let tb_carb_kcal="";


function crea_risultato(){

    div_risultato_head=document.getElementById("result");
    div_risultato_body=document.getElementById("result_content");

    div_risultato_head=`
                        <hr>
                        <div class="bmr">
                            <button class="bmr_button result_selected" id="base">Basal Metablism Rate (BMR)</button>
                        </div>
                        <div class="obiettivo_peso ">
                            <button class="obiettivo" id="lw">Lose Weight</button>
                            <button class="obiettivo" id="mw">Mantein Weight</button>
                            <button class="obiettivo" id="gw">Gain Weight</button>
                        </div>`;


    div_risultato_body=`
                        <h3 id="result_kcal">BMR: <span id="span_bmr"></span> kcal</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Macro</th>
                                    <th>Ratio</th>
                                    <th>Grams</th>
                                    <th>kcal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="td_left">Fats:</td>
                                    <td id="tb_fat_percent">%</td>
                                    <td id="tb_fat_g">g</td>
                                    <td id="tb_fat_kcal">kcal</td>
                                </tr>
                                <tr>
                                    <td class="td_left">Proteins:</td>
                                    <td id="tb_pro_percent">%</td>
                                    <td id="tb_pro_g">g</td>
                                    <td id="tb_pro_kcal">kcal</td>
                                </tr>
                                <tr>
                                    <td class="td_left">Carbohydrates:</td>
                                    <td id="tb_carb_percent">%</td>
                                    <td id="tb_carb_g">g</td>
                                    <td id="tb_carb_kcal">kcal</td>
                                </tr>
                            </tbody>
                        </table>`;
    
    result_div_head.innerHTML= div_risultato_head;
    result_div_body.innerHTML= div_risultato_body;
    base=document.getElementById("base");
    lw=document.getElementById("lw");
    mw=document.getElementById("mw");
    gw=document.getElementById("gw");

    calcola_basale()
    
};

let base="";
let lw="";
let gw="";
let kcal_daily=0;


function calcola_basale(){

    base.classList.remove("result_selected");
    lw.classList.remove("result_selected");
    mw.classList.remove("result_selected");
    gw.classList.remove("result_selected");
    base.classList.add("result_selected");

    console.log(fat_div.children[1].value)
    if(fat_div.children[1].value!="") //calcola con il grasso
    {
        if(fat_div.children[1].id=="fat")//percentuale 
        {
            let pf=fat_div.children[1].value;
            let rap=pf/100;
            let lbm=pesoC*(1-rap);
            console.log(lbm);
            brmC=370+(21.6*lbm);
            console.log(brmC);

        }else if(fat_div.children[1].id=="fat_kg"){
            let fbm=fat_div.children[1].value;
            let lbm=pesoC-fbm;
            console.log(fbm);
            brmC=370+(21.6*lbm);
            console.log(brmC);

        }else if(fat_div.children[1].id=="fat_lb"){
            let fbm=fat_div.children[1].value/2.205;
            let lbm=pesoC-fbm;
            console.log(fbm);
            brmC=370+(21.6*lbm);
            console.log(brmC);
        }
    }else{ //calcola senza percentuale
        if(maleV==true)
        {
            brmC=(10*pesoC)+(6.25*altezzaC)-(5*etaC)+5;
            console.log(brmC);
        }else if(femaleV==true)
        {
            brmC=(10*pesoC)+(6.25*altezzaC)-(5*etaC)-161;
            console.log(brmC);
        }
    }
    brmC=Number(brmC.toFixed(0));

    result_kcal=document.getElementById("result_kcal");
    result_kcal.innerText="BRM: "+brmC+"kcal";

    //calcolo macro bmr
        //fat
    kcal_fats=(percent_fats_bmr/100)*brmC;
    console.log("fat kcal"+kcal_fats);
    kcal_fats=Number(kcal_fats.toFixed(0));
    console.log("fat kcal"+kcal_fats);
    g_fats=kcal_fats/fat_cal;
    console.log("fat g"+g_fats);
    g_fats=Number(g_fats.toFixed(0));
    console.log("fat g"+g_fats);
    //pro
    kcal_pro=(percent_pro_bmr/100)*brmC;
    kcal_pro=Number(kcal_pro.toFixed(0));
    g_pro=kcal_pro/pro_cal;
    g_pro=Number(g_pro.toFixed(0));
    //carb
    kcal_carb=(percent_carb_bmr/100)*brmC;
    kcal_carb=Number(kcal_carb.toFixed(0));
    g_carb=kcal_carb/carb_cal;
    g_carb=Number(g_carb.toFixed(0));

    //fat
    tb_fat_percent=document.getElementById("tb_fat_percent");
    tb_fat_g=document.getElementById("tb_fat_g");
    tb_fat_kcal=document.getElementById("tb_fat_kcal");
        //pro
    tb_pro_percent=document.getElementById("tb_pro_percent");
    tb_pro_g=document.getElementById("tb_pro_g");
    tb_pro_kcal=document.getElementById("tb_pro_kcal");
        //carb
    tb_carb_percent=document.getElementById("tb_carb_percent");
    tb_carb_g=document.getElementById("tb_carb_g");
    tb_carb_kcal=document.getElementById("tb_carb_kcal");

     tb_fat_percent.innerText=percent_fats_bmr+"%";
     tb_fat_g.innerText=g_fats+"g";
     tb_fat_kcal.innerText=kcal_fats+"kcal";
        //pro
     tb_pro_percent.innerText=percent_pro_bmr+"%";
     tb_pro_g.innerText=g_pro+"g";
     tb_pro_kcal.innerText=kcal_pro+"kcal";
        //carb
     tb_carb_percent.innerText=percent_carb_bmr+"%";
     tb_carb_g.innerText=g_carb+"g";
     tb_carb_kcal.innerText=kcal_carb+"kcal";

    // console.log(gw);
    // base.addEventListener("click", calcola_basale());
    lw.addEventListener("click", calcola_lw);
    mw.addEventListener("click", calcola_mw);
    gw.addEventListener("click", calcola_gw);


}


function calcola_lw(){
    if(active==0)
    {
        input_activity.classList.add("activity_warning");
        window.location.hash = '#input_activity';
        return;
    }else{
        input_activity.classList.remove("activity_warning");
    }


    base.classList.remove("result_selected");
    lw.classList.remove("result_selected");
    mw.classList.remove("result_selected");
    gw.classList.remove("result_selected");
    lw.classList.add("result_selected");

    
    console.log("sei dentro lw: "+brmC);
    kcal_daily=brmC*active;
    kcal_daily=Number(kcal_daily.toFixed(0));
    console.log(kcal_daily);
    

    let kcal_lw=kcal_daily-400;
    console.log(kcal_lw);
    
    result_kcal.innerText="To Lose Weight: "+kcal_lw+"kcal";

    kcal_fats=(percent_fats_lw/100)*kcal_lw;
    kcal_fats=Number(kcal_fats.toFixed(0));
    g_fats=kcal_fats/fat_cal;
    g_fats=Number(g_fats.toFixed(0));
    //pro
    kcal_pro=(percent_pro_lw/100)*kcal_lw;
    kcal_pro=Number(kcal_pro.toFixed(0));
    g_pro=kcal_pro/pro_cal;
    g_pro=Number(g_pro.toFixed(0));
    //carb
    kcal_carb=(percent_carb_lw/100)*kcal_lw;
    kcal_carb=Number(kcal_carb.toFixed(0));
    g_carb=kcal_carb/carb_cal;
    g_carb=Number(g_carb.toFixed(0));

    //fat
    tb_fat_percent=document.getElementById("tb_fat_percent");
    tb_fat_g=document.getElementById("tb_fat_g");
    tb_fat_kcal=document.getElementById("tb_fat_kcal");
        //pro
    tb_pro_percent=document.getElementById("tb_pro_percent");
    tb_pro_g=document.getElementById("tb_pro_g");
    tb_pro_kcal=document.getElementById("tb_pro_kcal");
        //carb
    tb_carb_percent=document.getElementById("tb_carb_percent");
    tb_carb_g=document.getElementById("tb_carb_g");
    tb_carb_kcal=document.getElementById("tb_carb_kcal");

    tb_fat_percent.innerText=percent_fats_lw+"%";
    tb_fat_g.innerText=g_fats+"g";
    tb_fat_kcal.innerText=kcal_fats+"kcal";
    //pro
    tb_pro_percent.innerText=percent_pro_lw+"%";
    tb_pro_g.innerText=g_pro+"g";
    tb_pro_kcal.innerText=kcal_pro+"kcal";
    //carb
    tb_carb_percent.innerText=percent_carb_lw+"%";
    tb_carb_g.innerText=g_carb+"g";
    tb_carb_kcal.innerText=kcal_carb+"kcal";

    // console.log(gw);
    // base.addEventListener("click", calcola_basale());
    base.addEventListener("click", calcola_basale);
    mw.addEventListener("click", calcola_mw);
    gw.addEventListener("click", calcola_gw);

}

function calcola_mw(){

    if(active==0)
    {
        input_activity.classList.add("activity_warning");
        window.location.hash = '#input_activity';
        return;
    }else{
        input_activity.classList.remove("activity_warning");
    }

    base.classList.remove("result_selected");
    lw.classList.remove("result_selected");
    mw.classList.remove("result_selected");
    gw.classList.remove("result_selected");
    mw.classList.add("result_selected");

    
    console.log("sei dentro lw: "+brmC);
    kcal_daily=brmC*active;
    kcal_daily=Number(kcal_daily.toFixed(0));
    console.log(kcal_daily);


    result_kcal.innerText="To Maintain Weight: "+kcal_daily+"kcal";

    kcal_fats=(percent_fats_mw/100)*kcal_daily;
    console.log("fat kcal"+kcal_fats);
    kcal_fats=Number(kcal_fats.toFixed(0));
    console.log("fat kcal"+kcal_fats);
    g_fats=kcal_fats/fat_cal;
    console.log("fat g"+g_fats);
    g_fats=Number(g_fats.toFixed(0));
    console.log("fat g"+g_fats);
    //pro
    kcal_pro=(percent_pro_mw/100)*kcal_daily;
    kcal_pro=Number(kcal_pro.toFixed(0));
    g_pro=kcal_pro/pro_cal;
    g_pro=Number(g_pro.toFixed(0));
    //carb
    kcal_carb=(percent_carb_mw/100)*kcal_daily;
    kcal_carb=Number(kcal_carb.toFixed(0));
    g_carb=kcal_carb/carb_cal;
    g_carb=Number(g_carb.toFixed(0));

    //fat
    tb_fat_percent=document.getElementById("tb_fat_percent");
    tb_fat_g=document.getElementById("tb_fat_g");
    tb_fat_kcal=document.getElementById("tb_fat_kcal");
        //pro
    tb_pro_percent=document.getElementById("tb_pro_percent");
    tb_pro_g=document.getElementById("tb_pro_g");
    tb_pro_kcal=document.getElementById("tb_pro_kcal");
        //carb
    tb_carb_percent=document.getElementById("tb_carb_percent");
    tb_carb_g=document.getElementById("tb_carb_g");
    tb_carb_kcal=document.getElementById("tb_carb_kcal");

    tb_fat_percent.innerText=percent_fats_mw+"%";
    tb_fat_g.innerText=g_fats+"g";
    tb_fat_kcal.innerText=kcal_fats+"kcal";
    //pro
    tb_pro_percent.innerText=percent_pro_mw+"%";
    tb_pro_g.innerText=g_pro+"g";
    tb_pro_kcal.innerText=kcal_pro+"kcal";
    //carb
    tb_carb_percent.innerText=percent_carb_mw+"%";
    tb_carb_g.innerText=g_carb+"g";
    tb_carb_kcal.innerText=kcal_carb+"kcal";

    // console.log(gw);
    // base.addEventListener("click", calcola_basale());
    base.addEventListener("click", calcola_basale);
    lw.addEventListener("click", calcola_lw);
    gw.addEventListener("click", calcola_gw);



}

function calcola_gw(){

    if(active==0)
    {
        input_activity.classList.add("activity_warning");
        window.location.hash = '#input_activity';
        return;
    }else{
        input_activity.classList.remove("activity_warning");
    }

    base.classList.remove("result_selected");
    lw.classList.remove("result_selected");
    mw.classList.remove("result_selected");
    gw.classList.remove("result_selected");
    gw.classList.add("result_selected");

   
    console.log("sei dentro lw: "+brmC);
    kcal_daily=brmC*active;
    kcal_daily=Number(kcal_daily.toFixed(0));
    console.log(kcal_daily);


    let kcal_gw=kcal_daily+400;
    console.log(kcal_gw);
    
    result_kcal.innerText="To Lose Weight: "+kcal_gw+"kcal";

    kcal_fats=(percent_fats_gw/100)*kcal_gw;
    kcal_fats=Number(kcal_fats.toFixed(0));
    g_fats=kcal_fats/fat_cal;
    g_fats=Number(g_fats.toFixed(0));
    //pro
    kcal_pro=(percent_pro_gw/100)*kcal_gw;
    kcal_pro=Number(kcal_pro.toFixed(0));
    g_pro=kcal_pro/pro_cal;
    g_pro=Number(g_pro.toFixed(0));
    //carb
    kcal_carb=(percent_carb_gw/100)*kcal_gw;
    kcal_carb=Number(kcal_carb.toFixed(0));
    g_carb=kcal_carb/carb_cal;
    g_carb=Number(g_carb.toFixed(0));

    //fat
    tb_fat_percent=document.getElementById("tb_fat_percent");
    tb_fat_g=document.getElementById("tb_fat_g");
    tb_fat_kcal=document.getElementById("tb_fat_kcal");
        //pro
    tb_pro_percent=document.getElementById("tb_pro_percent");
    tb_pro_g=document.getElementById("tb_pro_g");
    tb_pro_kcal=document.getElementById("tb_pro_kcal");
        //carb
    tb_carb_percent=document.getElementById("tb_carb_percent");
    tb_carb_g=document.getElementById("tb_carb_g");
    tb_carb_kcal=document.getElementById("tb_carb_kcal");

    tb_fat_percent.innerText=percent_fats_gw+"%";
    tb_fat_g.innerText=g_fats+"g";
    tb_fat_kcal.innerText=kcal_fats+"kcal";
    //pro
    tb_pro_percent.innerText=percent_pro_gw+"%";
    tb_pro_g.innerText=g_pro+"g";
    tb_pro_kcal.innerText=kcal_pro+"kcal";
    //carb
    tb_carb_percent.innerText=percent_carb_gw+"%";
    tb_carb_g.innerText=g_carb+"g";
    tb_carb_kcal.innerText=kcal_carb+"kcal";

    // console.log(gw);
    // base.addEventListener("click", calcola_basale());
    base.addEventListener("click", calcola_basale);
    mw.addEventListener("click", calcola_mw);
    lw.addEventListener("click", calcola_lw);
}
