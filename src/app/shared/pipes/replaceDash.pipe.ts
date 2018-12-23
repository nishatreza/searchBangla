import { Pipe, PipeTransform } from '@angular/core';
// import {AsyncPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, UpperCasePipe, TitleCasePipe} from './pipes/index';
@Pipe({name: 'replaceDash'})
export class ReplaceDashPipe implements PipeTransform {
  transform(value: string): string {
    return value? value.replace("-"," ") : value;
  }
}