
const symbol = $('.symbol')
const operand = $('.operand')
let buffer = ''
let sayTrue = false
let item=0;
const theme1 = [
	{
		id: 1,
		body: 'hsl(222, 26%, 31%)',
		calc_them_numbtn_display_txt: 'hsl(0, 0%, 100%)',
		toggle_btn_colr: 'hsl(6, 63%, 50%)',
		display_bg: 'hsl(224, 36%, 15%)',
		display_colr: 'hsl(0,0%,100%)',
		container_togglebtn_bg: 'hsl(223,31%,20%)',
		btn_bg: 'hsl(30, 25%, 89%)',
		btn_colr: 'hsl(221, 14%, 31%)',
		btn_hover: 'hsl(0, 0%, 100%)',
		btn_shadow: '0px 3px hsl(28, 16%, 65%)',
		del_reset_bg: 'hsl(225, 21%, 49%)',
		del_reset_colr: 'hsl(0, 0%, 100%)',
		del_reset_hover: '#9b92f3',//'#827ef8',//''
		del_reset_shadow: '0 3px hsl(224, 28%, 35%)',
		equals: 'hsl(6, 63%, 50%)',
		equals_hover: '#fe7363',
		equals_shadow: '0 3px hsl(6, 70%, 34%)',
		equals_colr: 'hsl(0, 0%, 100%)'
	},
	{
		id: 2,
		body: 'hsl(0, 0%, 90%)',
		calc_them_numbtn_display_txt: 'hsl(60, 10%, 19%)',
		toggle_btn_colr: 'hsl(25, 98%, 40%)',
		display_bg: 'hsl(0, 0%, 93%)',
		display_colr: 'hsl(60, 10%, 19%)', 
		container_togglebtn_bg: 'hsl(0, 5%, 81%)',
		btn_bg: 'hsl(45, 7%, 89%)',
		btn_colr: 'hsl(60, 10%, 19%)',
		btn_hover: 'hsl(0, 0%, 100%)',
		btn_shadow: '0px 3px hsl(35, 11%, 61%)',
		del_reset_colr: 'hsl(0, 0%, 100%)',
		del_reset_bg: 'hsl(185, 42%, 37%)',

		del_reset_hover: '#74bfff', 
		del_reset_shadow: '0px 3px hsl(185, 58%, 25%)',
		equals: 'hsl(25, 98%, 40%)',
		equals_hover: '#f5750b',
		equals_shadow: '0 3px hsl(25, 99%, 27%)',
		equals_colr: 'hsl(0, 0%, 100%)'
	},

	{
		id: 3,
		body: 'hsl(268, 75%, 9%)',
		calc_them_numbtn_display_txt: 'hsl(52, 100%, 62%)',
		toggle_btn_colr: 'hsl(176, 100%, 44%)',
		display_bg: 'hsl(268, 71%, 12%)',
		display_colr: 'hsl(52, 100%, 62%)',
		container_togglebtn_bg: 'hsl(268, 71%, 12%)',
		btn_bg: 'hsl(268, 47%, 21%)',
		btn_colr: 'hsl(52, 100%, 62%)',
		btn_hover: '#7f4bcb',
		btn_shadow: '0px 3px hsl(290, 70%, 36%)',
		del_reset_bg: 'hsl(281, 89%, 26%)',
		del_reset_colr: 'hsl(0, 0%, 100%)',
		del_reset_hover: '#9c51b6',
		del_reset_shadow: 'hsl(285, 91%, 52%)',
		equals: 'hsl(176, 100%, 44%)',
		equals_hover: '#6cffff',
		equals_shadow: '0 3px hsl(177, 92%, 70%)',
		equals_colr: 'hsl(198, 20%, 13%)'
	}
]
$(document).ready(function () {
	$('#display').bind('keypress', function (e) {
		e.preventDefault()

		$('#display').val(0)
	})


	
	$('.rd').click(function (e) {
		e.preventDefault
		let val=$(this).attr('id')
		for(let i=0;i<theme1.length;i++){
		if(val.includes(theme1[i].id)){
			 item = theme1[i]
			$('body').css('background-color', item.body)
			$('.calc').css('color',item.calc_them_numbtn_display_txt)
			$('.theme').css('color',item.calc_them_numbtn_display_txt)
			$('.num-btn').css('color',item.calc_them_numbtn_display_txt)
			$('.toggle-btn').css('background-color',item.container_togglebtn_bg)
			$('.container').css('background-color',item.container_togglebtn_bg)
			$('.btn').css({
				color:item.btn_colr,
				'background-color':item.btn_bg,
				'box-shadow':item.btn_shadow
				
			})

			$('#del').css({
				color:item.del_reset_colr,
				'background-color':item.del_reset_bg,
				'box-shadow':item.del_reset_shadow
			})

			$('#clear').css({
				color:item.del_reset_colr,
				'background-color':item.del_reset_bg,
				'box-shadow':item.del_reset_shadow
			
			})

			$('#equals').css({
				color:item.equals_colr,
				'background-color':item.toggle_btn_colr,
				'box-shadow':item.equals_shadow

			})

			   let new_rad=$( ".toggle-btn" ).find( this ) 
			   new_rad=new_rad[0]
			  
			 if($(new_rad).attr('id')==val){
				$('.rd').css('background-color','')

				$(new_rad).css('background-color',item.toggle_btn_colr)

			 }
			 
			 $('#display').css({
				'background-color':item.display_bg,
			 color:item.display_colr
			})

			
		}}
	})

	
	$('.btn-success').mouseover(function () {
		if(this.id=='del' || this.id=='clear'){
			$(this).css({
					'background-color': item.del_reset_hover
				})
					
		}
		else if(this.id=='equals'){
			$(this).css({
					'background-color': item.equals_hover
				})
			
		}
		else{
				$(this).css({
			'background-color': item.btn_hover,
		})
	}
	})
	$('.btn-success').mouseleave(function () {
		if(this.id=='del' || this.id=='clear'){
			$(this).css({
				'background-color': item.del_reset_bg,
				color: item.del_reset_colr,
				
			})		}
			else if(this.id=='equals'){
				$(this).css({
						'background-color': item.equals
					})
				
			}
			else{
				$(this).css({
					'background-color': item.btn_bg,
					color: item.btn_colr,
					
				})
			}
		



	})

	

	$('.btn-success').click(function (e) {
		$(this).css({
			'position': 'relative',
			'top':'2px',
			'right':'3px'
		
		})
		
		setTimeout(() => {
			$(this).css({
				'position': 'static',
				'top': 'auto',
				'right': 'auto'
			});
		}, 200);

	})


	symbol.click(function (e) {
		e.preventDefault()
		if (sayTrue == true) {
			sayTrue = false
		}
		const temp = $(this).attr('num')
		buffer += temp
		buffer = buffer.split(' ').join('')

		if (temp == 'C') { //reset
			buffer = ''
			$('#display').val(0)
		} else if (temp == 'D') {// del
			
			buffer = buffer.replace('D', '')
			if (buffer.length == 1) {
				buffer = ''
				$('#display').val(0)
			} else if (buffer.length != 0) {
				let t = buffer.slice(0, buffer.length - 1)
				buffer = ''
				buffer = t
				$('#display').val(buffer)
			} else {
				buffer = ''
				$('#display').val(0)
			}
		} else if (temp == '=') {

			let exp = $('#display').val()
			exp = exp.replace(/x/g, '*')
          
			exp = exp.replace('=', '')
			buffer=buffer.replace('=','')
			try {
				// Evaluate the expression using the eval function
				const result = eval(exp);
				buffer = result
				$('#display').val(result)
				sayTrue = true
				// Log the result to the console
				console.log('Result:', result);
			  } catch (error) {
				// Catch block to handle errors
				// Check if the error is an instance of EvalError
				if (error instanceof EvalError) {
				  // If the error is an EvalError, log the error message to the console
				  console.log('EvalError:', error.message);
				  sayTrue = false
				  exp = exp.replace('=', '')

				} else {
				  // If the error is not an EvalError, log the error message to the console
				  console.log('Error:', error.message);
				  sayTrue = false
				  exp = exp.replace('=', '')


				}
			  }

        } 

      else if(temp=='-'&& buffer.includes('--')){
        if(buffer.search('--')==0){// multiple - at the begining ----- = -
          buffer='-'
          $('#display').val(buffer)
        }
        else if (buffer.search('--')>0){
          let index = buffer.match( '--')// 6*1---- = 6*1-
            index=index[0] // get pattern
              let indice = index.length
              let buf_temp = buffer.slice(0,buffer.length-indice)
            buffer = buf_temp + '-'
            $('#display').val(buffer)
             
        }
      }
        else if(buffer.match(  /\d*(\+|\x|\/){2,}/g )){
         let sign=buffer.match(/(\+|\x|\/){2,}/g) // combination of signs // or ** or ++ or /* or */ or +/ or /+ or +* or *+  
          sign =sign[0]
        let last = sign[sign.length-1]
          // +x or /x or xx= x same for x/ or +/ or // same for /+ or x+ or ++ = +
          let buf_temp = buffer.slice(0,buffer.length-sign.length)
          buffer = buf_temp + last
           $('#display').val(buffer)
        }
		   //---------------- update
    else if(buffer.includes('+-+')||buffer.includes('/-/')||buffer.includes('x-x')){
            //console.log('problem');
            let sign = buffer.match(/(\+|\x|\/){1}(\-)(\+|\x|\/){1}/g)
            
           sign = sign[0];
           let buf_temp = buffer.slice(0,buffer.length-sign.length);
           
           buffer = buf_temp + temp;
          // console.log(buffer)
           $('#display').val(buffer)

                             }
    //---------------- update
          
          else if(buffer.includes('+-x') || buffer.includes('+-/') || buffer.includes('/-x') || buffer.includes('/-+') || buffer.includes('x-/') || buffer.includes('x-+') ){// /  (\*\-\+)|(\+\-\* )  /gm )){ /// [\/|\*|\+]\-[\/|\+|\*] /g ) ){
            console.log('yess')
          
      const pattern =  /(\-|\+|\x|\/){3,}/g
            let sign = buffer.match(pattern)
       		 sign =sign[0]
       // +-x=x, +-/=/, /-x=x, /-+=+, x-/=/, x-+=+
            
          let buf_temp = buffer.slice(0,buffer.length-sign.length)
          
            buffer = buf_temp + temp
           $('#display').val(buffer)
            
          }

            else if(  buffer.includes('-/') || buffer.includes('-x') || buffer.includes('-+')  ){// /  (\*\-\+)|(\+\-\* )  /gm )){ /// [\/|\*|\+]\-[\/|\+|\*] /g ) ){
			const pattern =  /(\-|\+|\x|\/){2,}/g
            let sign = buffer.match(pattern)
       	 sign =sign[0]
                // -x=x, -/=/, -+=+,  
          let buf_temp = buffer.slice(0,buffer.length-sign.length)
          
            buffer = buf_temp + temp
           $('#display').val(buffer)
           
            
          }
       
        else if (temp == '.' || buffer.length != 0) {
			$('#display').val(buffer)

			let pattern = /\d*\.\d*\./g // 9-0.3.2= 9-0.32

			let symb_pattern = buffer.match(pattern)

			if (buffer.includes('..')) {
				//9....7 should be changed to 9.7
				
				const temp = buffer.slice(0, buffer.length - 1) 
				buffer = '' 
				buffer = temp 
				$('#display').val(buffer) 
			} 
			else if (symb_pattern) {
				symb_pattern = symb_pattern[0] 

				let len = symb_pattern.length 
				let tempBuffer = buffer.slice(0, buffer.length - 1) 

				buffer = ''
				buffer = tempBuffer
				$('#display').val(buffer)
			}
		} 
        
      
       else {
		$('#display').val(buffer)
		}

      
	})

	operand.click(function (e) {
		e.preventDefault()
		if (sayTrue == true) {
			sayTrue = false
			const buffer_temp = $(this).attr('num')
			buffer = ''
			$('#display').val(buffer)
		}
	
     	const temp = $(this).attr('num')
		buffer += temp
		buffer = buffer.split(' ').join('')
      
		const new_pattern1 =  /[\+|\-|x|\/]0{2,}/gm  // expression containing multiple zeroes i.e. +000-0000000=> +0-0
		const new_pattern4 = /^0{2,}/g //remove leading zeros i.e. expression shouldnot begin with zeroes
		const new_pattern2 =   /[\+|\x|\-\/]+0{1,}[1-9]/g  //+006 or -000006 = 6
		const new_pattern3 = /^0{1,}[1-9]/g //07 or 00007 expression beginning with this

		let new_pat1 = buffer.match(new_pattern1)
		let new_pat4 = buffer.match(new_pattern4)

		let new_pat2 = buffer.match(new_pattern2)
		let new_pat3 = buffer.match(new_pattern3)


		 if (new_pat1) {
			// multiple zero
			new_pat1 = new_pat1[0]
			let len = new_pat1.length
			let indice = buffer.search(new_pattern1)
			let buffer_temp = buffer.slice(0, indice + 2)
			buffer = buffer_temp
			$('#display').val(buffer)
		}
		
		else if (new_pat2) {
			new_pat2 = new_pat2[0]
			// 2 or more zeroes followed by a digit
			let len = new_pat2.length
			let indice = buffer.search(new_pattern2)
			const buffer_temp = buffer.slice(0, indice + 1)
			buffer = buffer_temp + new_pat2[len - 1]
			$('#display').val(buffer)

			}
			 else if (new_pat3) {
			// 08 or 0008 =8 begin with multiple zero before number or a single zero before a number
			new_pat3 = new_pat3[0]
			let len = new_pat3.length
			buffer = new_pat3[len - 1]
			$('#display').val(buffer)
		} 
		else if (new_pat4) {
			new_pat4 = new_pat4[0] //0000000 = 0
			buffer =0
		}
			else {
			$('#display').val(buffer)
		}
	})
})

