
let w =10;
let i=0;
let width=800;
let height=200;
let values;
function setup() {
 
 
  createCanvas(800, 200);
  values=new Array(floor(width/w));
  
 for(let i =0; i<values.length;i++){
   values[i] = random(height);

  }
frameRate(5);
quickSort(values,0,values.length-1);
}
async function quickSort(arr,start,end){
   if(start>=end){
     return;
   }

   let index = await partition(arr,start,end);
  await quickSort(arr,start,index-1);
   await quickSort(arr,index+1,end);

}


async function partition(arr,start,end){
  let pivotIndex =start;
  let pivotValue=arr[end];
  for(let i = start ; i<end;i++){
        
         if(arr[i] <pivotValue){
             await Swap(arr,i,pivotIndex);
              pivotIndex++;

         }
  }
   await Swap(arr,pivotIndex,end);
   return pivotIndex;
}

function draw() {
  background(51);

  for(let i=0; i<values.length;i++){
         stroke(0);
         fill(255);
         rect(i*w,height-values[i],w,values[i]);

  }
}


function sleep(ms){
return new Promise(resolve=>setTimeout(resolve,ms));

}

async function Swap(arr,a,b){
 await sleep(100);
 let temp = arr[a];
 arr[a] = arr[b];
 arr[b] = temp;

}