﻿function noTrueReturnOpNoElse(a){if(a)return a.toString()}function noTrueReturnOpWithElse(a){if(a)return a.toString()}function no1(a){if(a==1)return!0}function yes1(a){return a==1?!0:!1}function yes2(a){return a==1?!0:!1}function yes3(a){return a==1?"one":a==2?"two":a==3?"three":"more"}function yes4(a){return a==1?"one":a==2?"two":a==3?"three":"more"}function yes5(a){return a==1?"one":a==2?"two":a==3?"three":"more"}function yes6(a){return a==1?"one":"not one"}function yes7(a){return a==1?"one":a==2?"two":a==3?"three":void 0}function no2(a){while(a){if(a==1)return"one";if(a==2)return"two";if(a==3)return"three"}}function sorta(a){while(a)if(++a>0)return a==1?"one":a==2?"two":a==3?"three":"more"}function removeIf(test){test()}