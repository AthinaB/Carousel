$(document).ready(function()
{
	//alert("start of the script");
	var nowli= $('#slider').find('li').first();
	var li_num= $('#slider li').length;
	var slid_ul=$('#slider');
	var nowli_num=li_num;
	var pos=0;
	$('#l_arrow').hide();
	$('#r_arrow, #l_arrow').on('click', moveLi);
		
	function moveLi(event)
	{
		event.preventDefault();
		 
		whereAmI();
	
		if(this.id=='l_arrow')
		{	
			pos-=320;
			slid_ul.animate({right: pos+'px'},800); 		
			nowli_num++;
		}
		else if(this.id=='r_arrow')
		{
			pos+=320;
			slid_ul.animate({right: pos+'px'},800); 				
			nowli_num--;
		}
	
		whereAmI();
	}


	function whereAmI()
	{
		if(nowli_num!=li_num)
			{
				$('#l_arrow').show();
			}
			else
			{
				$('#l_arrow').hide();
			}
		if(nowli_num!==1)
		{
			$('#r_arrow').show();
		}
		else 
			{
				$('#r_arrow').hide();
			}	
	}


})