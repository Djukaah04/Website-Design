let xmlContent = ''
let proba = document.querySelector('.proba')

fetch('zadatak.xml').then(
    (response) => {
        response.text().then(
            (xml) => {
                // Parse
                let parser = new DOMParser();
                let xmlDOM = parser.parseFromString(xml, 'application/xml')

                let dropdown_link = xmlDOM.querySelector('dropdown_link')

                // Dropdown
                let link = xmlDOM.querySelector('link');
                let myDropdown =  document.querySelector('#navbarDropdown')
                let myDropdownMenu = document.querySelector('.dropdown-menu')

                myDropdown.innerText = dropdown_link.innerHTML
                myDropdown.classList.add('blackText')
                myDropdown.classList.add('mediumWeight')

                let myLink;
                for(let i = 0; i < 3 ; i++) {
                    myLink = document.createElement('a')
                    myLink.innerText = link.innerHTML
                    myLink.classList.add('blackText')
                    myLink.classList.add('mediumWeight')
                    myLink.classList.add('dropdown-item')

                    myDropdownMenu.appendChild(myLink)
                }

                // Link1, Link2, Link3
                let myUl = document.querySelector('ul.navbar-nav.mr-auto')
                let link1 = xmlDOM.querySelector('link1');
                let link2 = xmlDOM.querySelector('link2')
                let link3 = xmlDOM.querySelector('link3')
                let links = []
                links.push(link1)
                links.push(link2)
                links.push(link3)

                links.forEach( link => {
                    let myLi = document.createElement('li')
                    myLi.classList.add('nav-item')
                    let myA = document.createElement('a')
                    myA.classList.add('nav-link')
                    myA.classList.add('blackText')
                    myA.classList.add('mediumWeight')

                    myA.innerText = link.innerHTML

                    myLi.appendChild(myA)
                    myUl.appendChild(myLi)
                })
                
                // Heading 4 boxes
                let myHeadings4Div = document.querySelector('.headings4-div')
                let heading4 = xmlDOM.querySelector('heading4')
                

                for(let i = 0; i < 3 ; i++) {
                    // Text
                    let myHeading4Div = document.createElement('div')
                    myHeading4Div.className = 'heading4Div'
                    myHeading4Div.innerText = heading4.innerHTML

                    // Button
                    let mySelect = document.createElement('button')
                    mySelect.innerText = 'Select'
                    mySelect.style.marginTop = '13px'
                    mySelect.classList.add('btn')
                    mySelect.classList.add('btn-primary')

                    // Colors
                    if(i === 0)
                        myHeading4Div.style.backgroundColor = '#DC3545'
                    else if(i === 1) 
                        myHeading4Div.style.backgroundColor = '#6C757D'
                    else 
                        myHeading4Div.style.backgroundColor = '#FFC107'
              
                    myHeading4Div.appendChild(mySelect)
                    myHeadings4Div.appendChild(myHeading4Div)
                }
                
                // Heading 1
                let heading1 = xmlDOM.querySelector('heading1')
                document.querySelector('#table-h1').innerText = heading1.innerHTML
                document.querySelector('#table-h1').style.fontWeight = '650'

                // Table
                let myTableDiv = document.querySelector('.table-div')
                let myTable = document.createElement('table')

                myTable.classList.add('table')
                myTable.classList.add('table-bordered')

                // tHead
                let myTHead = document.createElement('thead')
                let mainHeadRow = document.createElement('tr')   
                mainHeadRow.style.display = 'flex'

                let compoundDiv1 = document.createElement('div')
                compoundDiv1.classList.add('compoundDiv1')
                mainHeadRow.appendChild(compoundDiv1)

                let myTh
                let column_group1 = xmlDOM.querySelector('column_group1')
                let column_group2 = xmlDOM.querySelector('column_group2')
                let column_group3 = xmlDOM.querySelector('column_group3')
                let group1 = []
                group1.push(column_group1)
                group1.push(column_group2)
                group1.push(column_group3)
                group1.forEach(column => {
                    myTh = document.createElement('th')
                    myTh.className = 'flex-center'
                    myTh.style.flexGrow = 1

                    myTh.innerText = column.innerHTML
                   
                    compoundDiv1.appendChild(myTh)
                });
                myTHead.appendChild(mainHeadRow)


                let column_group4 = xmlDOM.querySelector('column_group4')
                let column_group5 = xmlDOM.querySelector('column_group5')
                let column_group6 = xmlDOM.querySelector('column_group6')
                let group2 = []
                group2.push(column_group4)
                group2.push(column_group5)
                group2.push(column_group6)

                let compoundDiv2 = document.createElement('div')
    
                compoundDiv2.classList.add('compoundDiv2')
                mainHeadRow.appendChild(compoundDiv2)

                let subRow1 = document.createElement('tr')
                subRow1.style.display = 'flex'

                subRow1.style.flexGrow = 1
                compoundDiv2.appendChild(subRow1)
                let th1 = document.createElement('th')
                th1.style.flexGrow = 1
                th1.className = 'flex-center'
                th1.innerText = xmlDOM.querySelector('column_group').innerHTML
                subRow1.appendChild(th1)
               
                let subRow2 = document.createElement('tr')
                subRow2.style.display = 'flex'
                subRow2.style.flexGrow = 1
                compoundDiv2.appendChild(subRow2)

                group2.forEach(column => {
                    myTh = document.createElement('th')
                    myTh.className = 'flex-center'
                    myTh.style.flexGrow = 1
                    myTh.innerText = column.innerHTML

                    subRow2.appendChild(myTh)
                });
   

                // tBody
                let myTBody = document.createElement('tbody')

                let rows = xmlDOM.querySelector('rows')

                let darkenIt = true
                rows.childNodes.forEach((row, rowIndex) => {
                    
                    let dataRow = document.createElement('tr')
                    dataRow.style.display = 'flex'
                    dataRow.classList.add('mediumWeight')
                    myTBody.appendChild(dataRow)

                    if(rowIndex % 2 !== 0) {
                        row.childNodes.forEach((value, valueIndex) => {
                            if(valueIndex % 2 !== 0) {
                                let td = document.createElement('td')
                                td.style.flexGrow = 1
                                dataRow.appendChild(td)
                                td.innerText = value.innerHTML
                            }
                        })
                        if(darkenIt)
                            dataRow.style.backgroundColor = '#F2F2F2'
                        darkenIt = !darkenIt
                    }  
                })

                // Last row
                let table_total = xmlDOM.querySelector('table_total')
                let lastRow = document.createElement('tr')
                lastRow.style.display = 'flex'
                lastRow.style.backgroundColor = '#F2F2F2'
                myTBody.appendChild(lastRow)
                table_total.childNodes.forEach((child, index) => {
                    if(index % 2 !== 0) {
                        let td = document.createElement('td')

                        td.innerText = child.innerHTML
                        lastRow.appendChild(td)
                        if(index === 1) {
                            td.style.width = '50%'
                            td.style.display = 'flex'
                            td.style.justifyContent = 'flex-end'
                            td.innerText += ':'
                            td.style.fontWeight = '700'
                        }
                        else 
                            td.style.flexGrow = 1
                    } 
                })
                myTable.appendChild(myTHead)
                myTable.appendChild(myTBody)
                myTableDiv.appendChild(myTable)

                // Toggle part
                let accordianDiv = document.querySelector('#accordion')

                // First option
                let cardDiv = document.createElement('div')
                accordianDiv.appendChild(cardDiv)
                cardDiv.classList.add('card')

                let cardHeaderDiv = document.createElement('div')       
                cardDiv.appendChild(cardHeaderDiv)
                cardHeaderDiv.classList.add('card-header')
                cardHeaderDiv.classList.add('darkenBackground')

                let h5 = document.createElement('h5')
                cardHeaderDiv.appendChild(h5)
                h5.classList.add('mb-0')

                h5.innerHTML = `<button style="text-decoration: none;" class="blueText btn btn-link mediumWeight" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    ${xmlDOM.querySelector('toggle_text1').innerHTML}
                                </button>`
         
                let cardBody = `<div class="card-body">${xmlDOM.querySelector('toggle_text4').innerHTML}</div>`
                let collapsableDiv = `<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">${cardBody}</div>`
             
                cardDiv.innerHTML += collapsableDiv

               

                // Second option
                cardDiv = document.createElement('div')
                accordianDiv.appendChild(cardDiv)
                cardDiv.classList.add('card')

                cardHeaderDiv = document.createElement('div')       
                cardDiv.appendChild(cardHeaderDiv)
                cardHeaderDiv.classList.add('card-header')
                cardHeaderDiv.classList.add('whiteBackground')

                h5 = document.createElement('h5')
                cardHeaderDiv.appendChild(h5)
                h5.classList.add('mb-0')

                h5.innerHTML = `<button style="text-decoration: none;" class="blackText btn btn-link mediumWeight" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    ${xmlDOM.querySelector('toggle_text2').innerHTML}
                                </button>`
         
                cardBody = `<div class="card-body">${xmlDOM.querySelector('toggle_text5').innerHTML}</div>`
                collapsableDiv = `<div id="collapseTwo" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">${cardBody}</div>`
             
                cardDiv.innerHTML += collapsableDiv

                 // Third option
                 cardDiv = document.createElement('div')
                 accordianDiv.appendChild(cardDiv)
                 cardDiv.classList.add('card')
 
                 cardHeaderDiv = document.createElement('div')       
                 cardDiv.appendChild(cardHeaderDiv)
                 cardHeaderDiv.classList.add('card-header')
                 cardHeaderDiv.classList.add('whiteBackground')
 
                 h5 = document.createElement('h5')
                 cardHeaderDiv.appendChild(h5)
                 h5.classList.add('mb-0')
 
                 h5.innerHTML = `<button style="text-decoration: none;" class="blackText btn btn-link mediumWeight" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                     ${xmlDOM.querySelector('toggle_text3').innerHTML}
                                 </button>`
          
                 cardBody = `<div class="card-body">${xmlDOM.querySelector('toggle_text6').innerHTML}</div>`
                 collapsableDiv = `<div id="collapseThree" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">${cardBody}</div>`
              
                 cardDiv.innerHTML += collapsableDiv

                 let cardHeaderDivs = document.querySelectorAll('.card-header')
                 let toggleButtons = document.querySelectorAll('.btn.btn-link')
                 console.log(toggleButtons)
                 toggleButtons.forEach((button, i) => {
                    button.addEventListener('click', () => {
                        if(i === 0) {
                            cardHeaderDivs[0].classList.toggle('darkenBackground')
                            cardHeaderDivs[0].classList.toggle('whiteBackground')
                            toggleButtons[0].classList.toggle('blueText')
                            toggleButtons[0].classList.toggle('blackText')

                            cardHeaderDivs[1].classList.remove('darkenBackground')
                            cardHeaderDivs[1].classList.add('whiteBackground')

                            cardHeaderDivs[2].classList.remove('darkenBackground')
                            cardHeaderDivs[2].classList.add('whiteBackground')

                            toggleButtons[1].classList.remove('blueText')
                            toggleButtons[1].classList.add('blackText')

                            toggleButtons[2].classList.remove('blueText')
                            toggleButtons[2].classList.add('blackText')
                        }
                        else if(i === 1) {
                            cardHeaderDivs[1].classList.toggle('darkenBackground')
                            cardHeaderDivs[1].classList.toggle('whiteBackground')
                            toggleButtons[1].classList.toggle('blueText')
                            toggleButtons[1].classList.toggle('blackText')

                            cardHeaderDivs[0].classList.remove('darkenBackground')
                            cardHeaderDivs[0].classList.add('whiteBackground')

                            cardHeaderDivs[2].classList.remove('darkenBackground')
                            cardHeaderDivs[2].classList.add('whiteBackground')

                            toggleButtons[0].classList.remove('blueText')
                            toggleButtons[0].classList.add('blackText')

                            toggleButtons[2].classList.remove('blueText')
                            toggleButtons[2].classList.add('blackText')
                        }
                        else {
                            cardHeaderDivs[2].classList.toggle('darkenBackground')
                            cardHeaderDivs[2].classList.toggle('whiteBackground')
                            toggleButtons[2].classList.toggle('blueText')
                            toggleButtons[2].classList.toggle('blackText')

                            cardHeaderDivs[0].classList.remove('darkenBackground')
                            cardHeaderDivs[0].classList.add('whiteBackground')

                            cardHeaderDivs[1].classList.remove('darkenBackground')
                            cardHeaderDivs[1].classList.add('whiteBackground')

                            toggleButtons[0].classList.remove('blueText')
                            toggleButtons[0].classList.add('blackText')

                            toggleButtons[1].classList.remove('blueText')
                            toggleButtons[1].classList.add('blackText')
                        }
                    })
                })
    
                // Headlines 3
                let headlines3Div = document.querySelector('.headlines3-div')

                // 2 divs
                let leftHeadine3Div = document.createElement('div')
                headlines3Div.append(leftHeadine3Div)
                leftHeadine3Div.classList.add('headling3Div')
                leftHeadine3Div.style.paddingRight = '10px'

                let rightHeadine3Div = document.createElement('div')
                headlines3Div.append(rightHeadine3Div)
                rightHeadine3Div.classList.add('headling3Div')
                rightHeadine3Div.style.paddingRight = '10px'
                
                // Adding h3s
                let h3 = document.createElement('h3')
                h3.innerHTML = xmlDOM.querySelector('headline3').innerHTML
                leftHeadine3Div.appendChild(h3)

                h3 = document.createElement('h3')
                h3.innerHTML = xmlDOM.querySelector('headline3').innerHTML
                rightHeadine3Div.appendChild(h3)

                // Adding text
                leftHeadine3Div.innerHTML += xmlDOM.querySelector('headline_text1').innerHTML
                leftHeadine3Div.innerHTML += `<strong> ${xmlDOM.querySelector('headline_text2').innerHTML}</strong>`
                leftHeadine3Div.classList.add('mediumWeight')
                rightHeadine3Div.innerHTML += xmlDOM.querySelector('headline_text3').innerHTML
                rightHeadine3Div.innerHTML += `<i> ${xmlDOM.querySelector('headline_text4').innerHTML} </i>`
                rightHeadine3Div.innerHTML += xmlDOM.querySelector('headline_text5').innerHTML
                rightHeadine3Div.classList.add('mediumWeight')

                // Setting high of the smaller one
                let leftHeight = leftHeadine3Div.offsetHeight
                let rightHeight = rightHeadine3Div.offsetHeight

                let maxHeight = leftHeight > rightHeight ? leftHeight : rightHeight
                leftHeadine3Div.style.height = maxHeight + 'px'
                rightHeadine3Div.style.height = maxHeight + 'px'


                // Headling 4 Form
                let headling4FormDiv = document.querySelector('.headline4Form-div')
                
                let h4 = document.createElement('h4')
                headling4FormDiv.append(h4)
                h4.style.fontWeight = '700'
                headling4FormDiv.classList.add('mediumWeight')
                h4.innerHTML = xmlDOM.querySelector('headline4').innerHTML

                let p = document.createElement('p')
                headling4FormDiv.appendChild(p)
                p.innerHTML = 'Contact us if you have any questions.'

                let form = document.createElement('form')
                headling4FormDiv.appendChild(form)
                form.classList = 'subjectForm'

                let formGroupDiv = document.createElement('div')
                form.appendChild(formGroupDiv)
                formGroupDiv.classList.add('form-group')

                let label = document.createElement('label')
                formGroupDiv.appendChild(label)
                label.innerHTML = 'Subject'

                let textInput = document.createElement('input')
                formGroupDiv.appendChild(textInput)
                textInput.classList.add('form-control')
                textInput.type = 'text'

                formGroupDiv = document.createElement('div')
                form.appendChild(formGroupDiv)
                formGroupDiv.classList.add('form-group')

                label = document.createElement('label')
                formGroupDiv.appendChild(label)
                label.innerHTML = 'Email address<span class="red-star">*</span>'

                let emailInput = document.createElement('input')
                formGroupDiv.appendChild(emailInput)
                emailInput.classList.add('form-control')
                emailInput.type = 'email'
                emailInput.style.fontWeight = '600'
                emailInput.required = true
                emailInput.placeholder = 'name@example.com'

                formGroupDiv = document.createElement('div')
                form.appendChild(formGroupDiv)
                formGroupDiv.classList.add('form-group')

                label = document.createElement('label')
                formGroupDiv.appendChild(label)
                label.innerHTML = 'Example textarea'

                let textArea = document.createElement('textarea')
                textArea.classList.add('form-control')
                textArea.rows = 3
                formGroupDiv.appendChild(textArea)

                let sendBtnDiv = document.createElement('div')
                headling4FormDiv.appendChild(sendBtnDiv)
                sendBtnDiv.classList.add('sendBtnDiv')

                let sendBtn = document.createElement('button')
                sendBtnDiv.appendChild(sendBtn)
                sendBtn.type = 'submit'
                sendBtn.innerHTML = 'SEND'
                sendBtn.classList.add('btn')
                sendBtn.classList.add('btn-success')

            }
        )
    }
)