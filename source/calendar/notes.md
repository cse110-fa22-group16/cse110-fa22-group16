

### notes
* how many years do we show?
* do we allow the user to choose months-year pair where no entries exist?
* consider using `<input type='date>`
```html
  <!--this ONLY works on Chrome-->
  <label for="start">Start month:</label>
            <input type="month" id="start" name="start"
                min="2018-03" value="2018-05">
```
