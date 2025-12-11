import { LegacySample } from '@/types';

export const legacySamples: LegacySample[] = [
  {
    id: 'norwegian-tax-1',
    title: '🇳🇴 Norwegian Tax Calculator (Legacy)',
    description: 'Classic Norwegian tax code with hardcoded brackets from 2010',
    language: 'javascript',
    code: `// Norwegian Tax Calculator - DO NOT TOUCH!!! 
// Last modified: 2010-03-15 by Bjørn
// TODO: Update for 2011 tax rules
// FIXME: This breaks for incomes over 1M

function calculateTax(income) {
  var tax = 0;
  var temp = income;
  
  // Magic numbers everywhere!
  if (temp > 0) {
    if (temp <= 164100) {
      tax = temp * 0.28;
    } else {
      if (temp > 164100 && temp <= 230950) {
        tax = 164100 * 0.28;
        tax = tax + (temp - 164100) * 0.36;
      } else {
        if (temp > 230950 && temp <= 580650) {
          tax = 164100 * 0.28;
          tax = tax + (230950 - 164100) * 0.36;
          tax = tax + (temp - 230950) * 0.40;
        } else {
          if (temp > 580650 && temp <= 934050) {
            tax = 164100 * 0.28;
            tax = tax + (230950 - 164100) * 0.36;
            tax = tax + (580650 - 230950) * 0.40;
            tax = tax + (temp - 580650) * 0.45;
          } else {
            // XXX: Nobody earns this much anyway lol
            tax = 164100 * 0.28;
            tax = tax + (230950 - 164100) * 0.36;
            tax = tax + (580650 - 230950) * 0.40;
            tax = tax + (934050 - 580650) * 0.45;
            tax = tax + (temp - 934050) * 0.47;
          }
        }
      }
    }
  }
  
  try {
    // Apply deductions
    var d = getDeductions();
  } catch (e) {
    // Ignore errors, just continue
  }
  
  return tax;
}

// Helper function
function getDeductions() {
  var x = 0; // what is this for?
  return 0;
}
`
  },
  {
    id: 'norwegian-tax-2',
    title: '🇳🇴 Skatteetaten Legacy Module',
    description: 'Old Norwegian tax authority code with poor error handling',
    language: 'javascript',
    code: `// Skatteetaten beregning modul
// Ikke endre denne filen!!!
// HACK: Quick fix for production bug

var RATE1 = 0.22;  // Normal rate
var RATE2 = 0.25;  // Higher rate
var LIMIT = 550000; // NOK

function beregnSkatt(inntekt, type) {
  var resultat = 0;
  var foo = inntekt;
  
  // TODO: Add validation
  // FIXME: Doesn't handle negative income
  // XXX: Type parameter is never used
  
  if (foo < LIMIT) {
    resultat = foo * RATE1;
  } else {
    resultat = LIMIT * RATE1 + (foo - LIMIT) * RATE2;
  }
  
  // Apply mysterious adjustment
  resultat = resultat * 0.98; // Why 0.98???
  
  // Round to nearest krone
  resultat = Math.floor(resultat);
  
  try {
    var data = fetchTaxData();
    eval(data.formula); // Security nightmare!
  } catch (err) {
    // Silent failure
  }
  
  return resultat;
}

function fetchTaxData() {
  // TODO: Implement this
  return { formula: "resultat = resultat * 1.0" };
}

// Helper functions that do nothing
function validateInput(x) {
  var temp = x;
  return true;
}

function processResult(r) {
  var thing = r;
  var stuff = thing;
  var value = stuff;
  return value;
}
`
  },
  {
    id: 'vat-calculator',
    title: '💶 VAT Calculator Disaster',
    description: 'European VAT calculator with 7 levels of nesting',
    language: 'javascript',
    code: `// VAT Calculator v1.0
// Contact: lars@tax.no (email no longer valid)

function calculateVAT(amount, country, category, isB2B, hasExemption) {
  var vat = 0;
  var a = amount;
  
  if (country == "NO") {
    if (category == "food") {
      if (isB2B == true) {
        if (hasExemption == false) {
          if (a > 1000) {
            if (a < 10000) {
              vat = a * 0.15;
            } else {
              if (a > 50000) {
                vat = a * 0.12; // Bulk discount
              } else {
                vat = a * 0.15;
              }
            }
          } else {
            vat = a * 0.15;
          }
        } else {
          vat = 0;
        }
      } else {
        vat = a * 0.25;
      }
    } else {
      vat = a * 0.25;
    }
  } else {
    // TODO: Add other countries
    vat = a * 0.20; // Default EU rate (maybe?)
  }
  
  return vat;
}
`
  },
  {
    id: 'payroll-legacy',
    title: '💰 Payroll System Horror',
    description: 'Legacy payroll calculation with every anti-pattern imaginable',
    language: 'javascript',
    code: `// PAYROLL SYSTEM - CRITICAL - DO NOT MODIFY
// Written by: Unknown
// Date: Some time in 2008
// HACK HACK HACK

var BASE_SALARY = 350000;
var BONUS_PCT = 0.15;
var TAX = 0.30;

function calculatePayroll(emp) {
  var s = BASE_SALARY;
  var b = 0;
  var t = 0;
  var n = 0;
  
  // TODO: Validate employee data
  // FIXME: Breaks for part-time employees
  // XXX: Currency conversion is wrong
  
  try {
    if (emp.type == "manager") {
      if (emp.level == 1) {
        b = s * 0.20;
      } else if (emp.level == 2) {
        b = s * 0.15;
      } else if (emp.level == 3) {
        b = s * 0.10;
      }
      
      if (emp.performance == "excellent") {
        b = b * 1.5; // 50% extra
      } else if (emp.performance == "good") {
        b = b * 1.2; // 20% extra
      }
    }
  } catch (e) {}
  
  s = s + b;
  
  // Apply tax
  t = s * TAX;
  n = s - t;
  
  // Mystery adjustments
  n = n * 0.99; // Bank fee?
  n = n - 150; // Admin cost?
  
  var result = {
    gross: s,
    tax: t,
    net: n,
    bonus: b
  };
  
  return result;
}

// Unused helper functions
function formatCurrency(amt) {
  var x = amt;
  var y = x;
  return y;
}

function validateEmployee(e) {
  return true;
}

function foo(bar) {
  var baz = bar;
  return baz;
}
`
  },
  {
    id: 'simple-good',
    title: '✅ Clean Modern Code (Example)',
    description: 'Well-written TypeScript for comparison',
    language: 'typescript',
    code: `// Modern Tax Calculator - TypeScript
// Clean, type-safe, and maintainable

interface TaxBracket {
  minIncome: number;
  maxIncome: number;
  rate: number;
}

const NORWEGIAN_TAX_BRACKETS_2024: TaxBracket[] = [
  { minIncome: 0, maxIncome: 190350, rate: 0.22 },
  { minIncome: 190350, maxIncome: 267900, rate: 0.27 },
  { minIncome: 267900, maxIncome: 643800, rate: 0.31 },
  { minIncome: 643800, maxIncome: 969200, rate: 0.35 },
  { minIncome: 969200, maxIncome: Infinity, rate: 0.38 }
];

function calculateTax(income: number): number {
  if (income <= 0) {
    return 0;
  }

  let totalTax = 0;
  
  for (const bracket of NORWEGIAN_TAX_BRACKETS_2024) {
    if (income <= bracket.minIncome) {
      break;
    }
    
    const taxableInBracket = Math.min(
      income - bracket.minIncome,
      bracket.maxIncome - bracket.minIncome
    );
    
    totalTax += taxableInBracket * bracket.rate;
  }
  
  return Math.round(totalTax);
}

export { calculateTax, TaxBracket };
`
  },
  {
    id: 'datetime-nightmare',
    title: '📅 Date/Time Calculation Horror',
    description: 'Legacy date handling with hardcoded timestamps and no timezone support',
    language: 'javascript',
    code: `// Date utility functions - CRITICAL PAYROLL SYSTEM
// Author: Unknown (left company in 2009)
// TODO: Y2K38 problem!!!

var SECONDS_IN_DAY = 86400;
var DAYS_IN_YEAR = 365;
var YEAR_2000 = 946684800; // Unix timestamp

function calculateAge(birthdate) {
  // HACK: Assumes all months have 30 days
  var now = new Date();
  var birth = new Date(birthdate);
  
  var age = now.getFullYear() - birth.getFullYear();
  
  if (now.getMonth() < birth.getMonth()) {
    age = age - 1;
  } else {
    if (now.getMonth() == birth.getMonth()) {
      if (now.getDate() < birth.getDate()) {
        age = age - 1;
      }
    }
  }
  
  return age;
}

function addBusinessDays(date, days) {
  var result = new Date(date);
  var count = 0;
  
  // XXX: Doesn't handle holidays!
  // TODO: Add Easter calculation
  // FIXME: Norwegian holidays hardcoded
  
  while (count < days) {
    result.setDate(result.getDate() + 1);
    
    var day = result.getDay();
    
    // Skip weekends (maybe?)
    if (day != 0 && day != 6) {
      count++;
    }
  }
  
  // Hardcoded Norwegian holidays (2010 only!)
  if (result.getMonth() == 0 && result.getDate() == 1) {
    result.setDate(result.getDate() + 1); // New Year
  }
  if (result.getMonth() == 4 && result.getDate() == 1) {
    result.setDate(result.getDate() + 1); // Labour Day
  }
  if (result.getMonth() == 4 && result.getDate() == 17) {
    result.setDate(result.getDate() + 1); // Constitution Day
  }
  if (result.getMonth() == 11 && result.getDate() == 25) {
    result.setDate(result.getDate() + 1); // Christmas
  }
  
  return result;
}

// Calculate retirement date (67 years old)
function getRetirementDate(birthdate) {
  var d = new Date(birthdate);
  var y = d.getFullYear();
  
  y = y + 67;
  
  d.setFullYear(y);
  
  // Magic adjustment for leap years (???)
  if (y % 4 == 0) {
    d.setDate(d.getDate() - 1);
  }
  
  return d;
}

function formatNorwegianDate(date) {
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();
  
  // TODO: Pad with zeros
  return d + "." + m + "." + y;
}
`
  },
  {
    id: 'string-manipulation-hell',
    title: '🔤 String Manipulation Chaos',
    description: 'Legacy string processing with manual parsing and no validation',
    language: 'javascript',
    code: `// String utilities for tax forms
// WARNING: DO NOT MODIFY - PROD DEPENDS ON THIS

function parsePersonNumber(pnr) {
  // Norwegian person number: DDMMYYXXXXX
  // TODO: Validate format
  // FIXME: Y2K bug!!!
  
  var day = pnr.substring(0, 2);
  var month = pnr.substring(2, 4);
  var year = pnr.substring(4, 6);
  
  // Assume 19XX for now
  var fullYear = "19" + year;
  
  if (year < "50") {
    fullYear = "20" + year; // Maybe born after 2000?
  }
  
  var birthdate = day + "." + month + "." + fullYear;
  
  return birthdate;
}

function formatCurrency(amount) {
  var str = amount.toString();
  var result = "";
  var count = 0;
  
  // Add thousand separators manually
  for (var i = str.length - 1; i >= 0; i--) {
    result = str.charAt(i) + result;
    count++;
    
    if (count == 3 && i != 0) {
      result = " " + result;
      count = 0;
    }
  }
  
  result = "kr " + result; // Norwegian kroner
  
  return result;
}

function cleanInput(input) {
  var result = input;
  
  // Remove all non-numeric characters
  result = result.replace(/[^0-9]/g, "");
  
  // Remove leading zeros
  while (result.charAt(0) == "0" && result.length > 1) {
    result = result.substring(1);
  }
  
  return result;
}

function validateEmail(email) {
  // TODO: Use proper regex
  // HACK: Quick validation for demo
  
  if (email.indexOf("@") > 0) {
    if (email.indexOf(".") > email.indexOf("@")) {
      return true;
    }
  }
  
  return false;
}

function generateInvoiceNumber() {
  var d = new Date();
  var y = d.getFullYear();
  var m = d.getMonth() + 1;
  var day = d.getDate();
  var h = d.getHours();
  var min = d.getMinutes();
  var s = d.getSeconds();
  
  // Format: YYYYMMDDHHMMSS + random number
  var rnd = Math.floor(Math.random() * 1000);
  
  return y.toString() + m + day + h + min + s + rnd;
}
`
  },
  {
    id: 'global-state-disaster',
    title: '🌍 Global State Nightmare',
    description: 'Mutable global state with side effects everywhere',
    language: 'javascript',
    code: `// Global application state - DO NOT TOUCH!!!
// Last working version: 2008-03-15

var currentUser = null;
var userPermissions = [];
var taxYear = 2010;
var exchangeRate = 1.0;
var debugMode = false;
var errorCount = 0;
var lastError = "";
var tempData = {};
var cache = {};

function initializeSystem() {
  // TODO: Load from database
  currentUser = {
    id: 1,
    name: "Admin",
    role: "admin"
  };
  
  userPermissions = ["read", "write", "delete"];
  
  // HACK: Hardcoded exchange rates
  exchangeRate = 8.5; // NOK to EUR
  
  debugMode = true; // FIXME: Should be false in production!
}

function setTaxYear(year) {
  taxYear = year;
  
  // Side effect: Clear cache when year changes
  cache = {};
  
  // Side effect: Reset error counter  
  errorCount = 0;
  
  // Side effect: Update exchange rate based on year (???)
  if (year == 2010) {
    exchangeRate = 8.5;
  } else if (year == 2011) {
    exchangeRate = 8.2;
  } else {
    exchangeRate = 8.0; // Default
  }
}

function calculateTaxWithGlobals(income) {
  var tax = 0;
  
  // Mutate global state during calculation
  tempData.income = income;
  tempData.calculatedAt = new Date();
  
  try {
    if (taxYear == 2010) {
      tax = income * 0.28;
    } else {
      tax = income * 0.30;
    }
    
    // Convert to EUR if user is admin (???)
    if (currentUser.role == "admin") {
      tax = tax / exchangeRate;
    }
    
  } catch (e) {
    errorCount++; // Mutate global error counter
    lastError = e.message;
  }
  
  // Store in global cache
  cache[income] = tax;
  
  return tax;
}

function logActivity(action) {
  // Mutates global debug flag based on errors
  if (errorCount > 10) {
    debugMode = true;
  }
  
  if (debugMode) {
    console.log(action);
  }
  
  // Side effect: Clear temp data
  tempData = {};
}

function resetEverything() {
  currentUser = null;
  userPermissions = [];
  taxYear = 2010;
  exchangeRate = 1.0;
  debugMode = false;
  errorCount = 0;
  lastError = "";
  tempData = {};
  cache = {};
}
`
  },
  {
    id: 'callback-hell',
    title: '🔥 Callback Hell & Pyramid of Doom',
    description: 'Deeply nested callbacks with no error handling',
    language: 'javascript',
    code: `// Async tax calculation service
// WARNING: Callback hell ahead!

function processTaxReturn(userId, callback) {
  getUserData(userId, function(err, user) {
    if (user) {
      getIncomeData(user.id, function(err, income) {
        if (income) {
          getDeductions(user.id, function(err, deductions) {
            if (deductions) {
              calculateTax(income, deductions, function(err, tax) {
                if (tax) {
                  saveTaxResult(user.id, tax, function(err, result) {
                    if (result) {
                      sendConfirmationEmail(user.email, function(err, sent) {
                        if (sent) {
                          updateUserStatus(user.id, "processed", function(err, updated) {
                            if (updated) {
                              logActivity(user.id, "tax_processed", function(err, logged) {
                                if (logged) {
                                  callback(null, "Success!");
                                } else {
                                  callback("Log failed");
                                }
                              });
                            } else {
                              callback("Status update failed");
                            }
                          });
                        } else {
                          callback("Email failed");
                        }
                      });
                    } else {
                      callback("Save failed");
                    }
                  });
                } else {
                  callback("Tax calc failed");
                }
              });
            } else {
              callback("Deductions failed");
            }
          });
        } else {
          callback("Income failed");
        }
      });
    } else {
      callback("User failed");
    }
  });
}

// Mock async functions
function getUserData(id, cb) {
  setTimeout(function() { cb(null, {id: id, email: "test@test.no"}); }, 100);
}

function getIncomeData(id, cb) {
  setTimeout(function() { cb(null, 500000); }, 100);
}

function getDeductions(id, cb) {
  setTimeout(function() { cb(null, 50000); }, 100);
}

function calculateTax(income, deductions, cb) {
  setTimeout(function() { cb(null, (income - deductions) * 0.28); }, 100);
}

function saveTaxResult(id, tax, cb) {
  setTimeout(function() { cb(null, true); }, 100);
}

function sendConfirmationEmail(email, cb) {
  setTimeout(function() { cb(null, true); }, 100);
}

function updateUserStatus(id, status, cb) {
  setTimeout(function() { cb(null, true); }, 100);
}

function logActivity(id, activity, cb) {
  setTimeout(function() { cb(null, true); }, 100);
}
`
  },
  {
    id: 'copy-paste-code',
    title: '📋 Copy-Paste Code Duplication',
    description: 'Same logic repeated multiple times with slight variations',
    language: 'javascript',
    code: `// Tax calculation for different income types
// TODO: Refactor this mess

function calculateSalaryTax(salary) {
  var tax = 0;
  
  if (salary <= 0) {
    return 0;
  }
  
  if (salary <= 180000) {
    tax = salary * 0.22;
  } else if (salary <= 250000) {
    tax = 180000 * 0.22;
    tax = tax + (salary - 180000) * 0.27;
  } else if (salary <= 600000) {
    tax = 180000 * 0.22;
    tax = tax + (250000 - 180000) * 0.27;
    tax = tax + (salary - 250000) * 0.31;
  } else {
    tax = 180000 * 0.22;
    tax = tax + (250000 - 180000) * 0.27;
    tax = tax + (600000 - 250000) * 0.31;
    tax = tax + (salary - 600000) * 0.38;
  }
  
  return tax;
}

function calculatePensionTax(pension) {
  var tax = 0;
  
  if (pension <= 0) {
    return 0;
  }
  
  if (pension <= 180000) {
    tax = pension * 0.22;
  } else if (pension <= 250000) {
    tax = 180000 * 0.22;
    tax = tax + (pension - 180000) * 0.27;
  } else if (pension <= 600000) {
    tax = 180000 * 0.22;
    tax = tax + (250000 - 180000) * 0.27;
    tax = tax + (pension - 250000) * 0.31;
  } else {
    tax = 180000 * 0.22;
    tax = tax + (250000 - 180000) * 0.27;
    tax = tax + (600000 - 250000) * 0.31;
    tax = tax + (pension - 600000) * 0.38;
  }
  
  return tax;
}

function calculateDividendTax(dividend) {
  var tax = 0;
  
  if (dividend <= 0) {
    return 0;
  }
  
  if (dividend <= 180000) {
    tax = dividend * 0.22;
  } else if (dividend <= 250000) {
    tax = 180000 * 0.22;
    tax = tax + (dividend - 180000) * 0.27;
  } else if (dividend <= 600000) {
    tax = 180000 * 0.22;
    tax = tax + (250000 - 180000) * 0.27;
    tax = tax + (dividend - 250000) * 0.31;
  } else {
    tax = 180000 * 0.22;
    tax = tax + (250000 - 180000) * 0.27;
    tax = tax + (600000 - 250000) * 0.31;
    tax = tax + (dividend - 600000) * 0.38;
  }
  
  return tax;
}

function calculateRentalIncomeTax(rental) {
  var tax = 0;
  
  if (rental <= 0) {
    return 0;
  }
  
  if (rental <= 180000) {
    tax = rental * 0.22;
  } else if (rental <= 250000) {
    tax = 180000 * 0.22;
    tax = tax + (rental - 180000) * 0.27;
  } else if (rental <= 600000) {
    tax = 180000 * 0.22;
    tax = tax + (250000 - 180000) * 0.27;
    tax = tax + (rental - 250000) * 0.31;
  } else {
    tax = 180000 * 0.22;
    tax = tax + (250000 - 180000) * 0.27;
    tax = tax + (600000 - 250000) * 0.31;
    tax = tax + (rental - 600000) * 0.38;
  }
  
  return tax;
}
`
  }
];
