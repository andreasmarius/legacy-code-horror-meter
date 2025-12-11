import { LegacySample } from '@/types';

export const legacySamples: LegacySample[] = [
  {
    id: 'simple-good',
    title: '✅ Stage 1: Perfect Clean Code',
    description: 'Flawless modern code - Zero horror score',
    language: 'typescript',
    code: `// Perfect Tax Calculator - Modern TypeScript
// Clean, type-safe, well-documented, and maintainable

interface TaxBracket {
  minIncome: number;
  maxIncome: number;
  rate: number;
}

const TAX_CONFIG = {
  year: 2024,
  brackets: [
    { minIncome: 0, maxIncome: 190350, rate: 0.22 },
    { minIncome: 190350, maxIncome: 267900, rate: 0.27 },
    { minIncome: 267900, maxIncome: 643800, rate: 0.31 },
    { minIncome: 643800, maxIncome: 969200, rate: 0.35 },
    { minIncome: 969200, maxIncome: Infinity, rate: 0.38 }
  ] as const
};

function calculateTax(income: number): number {
  if (income <= 0) {
    return 0;
  }

  let totalTax = 0;
  
  for (const bracket of TAX_CONFIG.brackets) {
    if (income <= bracket.minIncome) {
      break;
    }
    
    const taxableAmount = Math.min(
      income - bracket.minIncome,
      bracket.maxIncome - bracket.minIncome
    );
    
    totalTax += taxableAmount * bracket.rate;
  }
  
  return Math.round(totalTax);
}

export { calculateTax, TAX_CONFIG };
`
  },
  {
    id: 'norwegian-tax-medium',
    title: '⚠️ Stage 2: Needs Attention',
    description: 'Some issues but manageable - Medium horror',
    language: 'javascript',
    code: `// Norwegian Tax Calculator - Legacy Code
// Last modified: 2015 by someone

var TAX_RATE_LOW = 0.22;
var TAX_RATE_MED = 0.27;
var TAX_RATE_HIGH = 0.31;
var BRACKET_1 = 190000;
var BRACKET_2 = 270000;

function calculateTax(income) {
  var tax = 0;
  
  // TODO: Add input validation
  
  if (income <= BRACKET_1) {
    tax = income * TAX_RATE_LOW;
  } else if (income <= BRACKET_2) {
    tax = BRACKET_1 * TAX_RATE_LOW;
    tax = tax + (income - BRACKET_1) * TAX_RATE_MED;
  } else {
    tax = BRACKET_1 * TAX_RATE_LOW;
    tax = tax + (BRACKET_2 - BRACKET_1) * TAX_RATE_MED;
    tax = tax + (income - BRACKET_2) * TAX_RATE_HIGH;
  }
  
  // FIXME: Why this adjustment?
  tax = tax * 0.98;
  
  return tax;
}

// Helper function
function validateIncome(val) {
  var x = val;
  return x > 0;
}
`
  },
  {
    id: 'norwegian-tax-high',
    title: '💀 Stage 3: Code Horror',
    description: 'Multiple serious issues - High horror (70-100)',
    language: 'javascript',
    code: `// Tax Calculator - Legacy Code
// Last modified: 2012
// TODO: Refactor this mess
// FIXME: Update tax rates

var rate1 = 0.22;
var rate2 = 0.27;
var rate3 = 0.31;
var bracket1 = 190000;
var bracket2 = 270000;

function calculateTax(income) {
  var tax = 0;
  var temp = income;
  
  if (temp > 0) {
    if (temp <= bracket1) {
      tax = temp * rate1;
    } else {
      if (temp > bracket1 && temp <= bracket2) {
        tax = bracket1 * rate1;
        tax = tax + (temp - bracket1) * rate2;
      } else {
        if (temp > bracket2) {
          tax = bracket1 * rate1;
          tax = tax + (bracket2 - bracket1) * rate2;
          tax = tax + (temp - bracket2) * rate3;
        }
      }
    }
  }
  
  // Mystery adjustment
  tax = tax * 0.98;
  
  return tax;
}

// Unused helper
function helper(x) {
  var y = x;
  return y;
}
`
  },
  {
    id: 'maximum-horror',
    title: '🔥 Stage 4: MAXIMUM HORROR',
    description: 'The worst code imaginable - 💥 EXPLOSION INCOMING!',
    language: 'javascript',
    code: `// CRITICAL SYSTEM - ABSOLUTELY DO NOT MODIFY!!!
// Author: ??? (left in 2008)
// TODO: Everything
// FIXME: Everything
// HACK: Everything
// XXX: May God help us all

var a=0;var b=0;var c=0;var d=0;var e=0;var f=0;var g=0;
var temp=0;var temp2=0;var temp3=0;var result=0;var data={};

function calc(p1,p2,p3,p4,p5,p6,p7,p8,p9) {
  var r=0;if(p1>0){if(p2>100){if(p3=="yes"){if(p4!=null){if(p5<50000){
  if(p6==true){if(p7>10){if(p8<5){if(p9>0){r=p1*0.28;}else{r=p1*0.25;}}
  else{r=p1*0.27;}}else{r=p1*0.30;}}else{r=p1*0.35;}}else{r=p1*0.40;}}
  else{r=p1*0.22;}}else{r=p1*0.20;}}else{r=p1*0.18;}}
  r=r*0.98;r=r*1.02;r=r-100;r=r+50;r=r*0.99;r=r*1.01;r=r-25;
  try{eval("r=r*"+p2/100);}catch(ex){}
  try{var x=get();eval(x);}catch(err){}
  try{process(r);}catch(e){}
  try{update(r);}catch(e){}
  try{save(r);}catch(e){}
  return r;
}

function get(){return"r=r*1.0";}
function process(v){temp=v;temp2=temp;temp3=temp2;result=temp3;data.v=result;}
function update(v){a=v;b=a;c=b;d=c;e=d;f=e;g=f;}
function save(v){temp=v;}
function foo(x){var y=x;return y;}
function bar(x){var y=x;return y;}
function baz(x){var y=x;return y;}
function test1(){return 1;}
function test2(){return 2;}
function test3(){return 3;}
function test4(){return 4;}
function test5(){return 5;}

var thing1=1234;var thing2=5678;var magic=9999;var secret=7777;
var val1=111;var val2=222;var val3=333;var val4=444;var val5=555;
`
  }
];
