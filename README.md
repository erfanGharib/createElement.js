# createElement.js
A module for making create html element easy
## How To import
<code>import createElement, { get } from './createElement.js';</code>
## Create Element
Call <code>createElement</code> function and pass params as object, example: <code>createElement({ tagName: 'nav' })</code>
- <code>tagName</code> , name of tag , default: <code>"div"</code>
- <code>target</code> , target tag id, class or tagName , default: <code>"body"</code>
- <code>targetIndex</code> , index of target element , default: <code>0</code>
- <code>insertType</code> , the way you want to insert , Accepted params: <code>"child"</code> <code>"after"</code> <code>"before"</code>  , default: <code>"child"</code>
- <code>inner</code> , innerHTML of element
- <code>cls</code> , element classes , pass one class as string , pass multiple as array, example <code>cls: [ 'class1', 'class2']</code>
- <code>id</code> , element id
- <code>style</code> , pass element inline style as string , example: <code>"background: #000;"</code>
- <code>placeholder</code> , element placeholder for input and textarea
- <code>type</code> , element type for input and button
- <code>eventName</code> , element event , example: <code>"click"</code>
- <code>eventFunc</code> , event function , default: <code>() => console.log('hello world!')</code>
- <code>exeOnce</code> , execute event once , default: <code>false</code>

## Get Element
get element by calling get function - pass first param as target element and pass second one as boolean for getting a nodeList , <br>
example: <code>get('targetTag', true)[indexOfElement].classList</code>
