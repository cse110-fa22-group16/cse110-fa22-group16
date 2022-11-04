

### notes
* in the dropdown:
  * how many years do we show?
  * do we allow the user to choose months-year pair where no entries exist?
* consider using `<input type='date>`, instead of two separate dropdowns.
```html
  <!--this ONLY works on Chrome-->
  <label for="start">Start month:</label>
            <input type="month" id="start" name="start"
                min="2018-03" value="2018-05">
```

* the main block is hard to be configured because the header uses `position: fixed` 
  * the main is displayed under the header. Was this intended?


### structure
* `body`
  * `main`
    - offsetted `80px` downwards to compensate for the header. I think we should make the header not fixed positioning.
    - a flex, so that we can center the calender.
    * `calendar`
      * `dropdown` for month/year
      * `date-grid`
        - a 7x7 grid. First row is for `day of the week labels`. The lower 6x7 grid is for the days.
        * `day of the week labels`
          * 7 labels; fills the first row.
        * `day`
          * 42 boxes; fills the lower 6 rows.
        