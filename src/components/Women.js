import React from 'react';
import './styles/Women.css';
import Product from './Product';

function Women() {
	return (
		<div className="women">
			<section className="women__tops">
				<h1>Tops</h1>
				<div className="women__topsContainer">
					<div className="women__top rowTop">
						<Product id="201" title="Denim Corset-style Top" price={24.99} image="https://lp2.hm.com/hmgoepprod?set=source[/81/4d/814d99ba9f08e9329d604bbc8f333554ec9d2b25.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
					<div className="women__top rowTop">
						<Product id="202" title="Oversized Graphic Tee" price={17.99} image="https://lp2.hm.com/hmgoepprod?set=source[/fa/cc/facc955c0fc3dfdf56192e5942c3666482a096f6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
					<div className="women__top rowBottom">
						<Product id="203" title="Ribbed Jersey Top" price={12.99} image="https://lp2.hm.com/hmgoepprod?set=source[/bf/1c/bf1c7153b083b61fde1ad6c5c9e87704869e5b8c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
					<div className="women__top rowBottom">
						<Product id="204" title="Cotton Tank Top" price={5.99} image="https://lp2.hm.com/hmgoepprod?set=source[/94/95/9495f0bbde95cd43ad44cef214377957706c568e.jpg],origin[dam],category[ladies_basics_tops_vests],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
				</div>
			</section>
			
			<section className="women__pants">
				<h1>Pants</h1>
				<div className="women__pantsContainer">
					<div className="women__pant rowTop">
						<Product id="205" title="Joggers" price={17.99} image="https://lp2.hm.com/hmgoepprod?set=source[/20/d8/20d882c272f5c29c119f5f7fd518ca0bf02efcea.jpg],origin[dam],category[ladies_trousers_joggers],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
					<div className="women__pant rowTop">
						<Product id="206" title="Jazz Pants" price={24.99} image="https://lp2.hm.com/hmgoepprod?set=source[/8c/4f/8c4f7e2cba3f1d0911bc37919707782093269a3b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
					<div className="women__pant rowBottom">
						<Product id="207" title="Slim-fit Jeans" price={24.99} image="https://lp2.hm.com/hmgoepprod?set=source[/79/e2/79e2e49d7d75eb5de98a2b61af171a3965c435d1.jpg],origin[dam],category[ladies_trousers_slim],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
					<div className="women__pant rowBottom">
						<Product id="208" title="Wide-cut Satin Pants" price={34.99} image="https://lp2.hm.com/hmgoepprod?set=source[/c0/88/c088f4cfc27f6680310d1a2b9787235fa0fe2434.jpg],origin[dam],category[ladies_trousers_highwaisted],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
				</div>
			</section>

			<section className="women__shoes">
				<h1>Shoes</h1>
				<div className="women__shoesContainer">
					<div className="women__shoe rowTop">
						<Product id="209" title="Pink Runners" price={42.99} image="https://lp2.hm.com/hmgoepprod?set=source[/92/5b/925b94a899836cf95ce5a9c40d4162d7f0237840.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
					<div className="women__shoe rowTop">
						<Product id="210" title="Pumps" price={25.99} image="https://lp2.hm.com/hmgoepprod?set=source[/23/1c/231c406f41ad4e846f55e111bd267665cd8d80dc.jpg],origin[dam],category[ladies_shoes_pumps_highheels],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
					<div className="women__shoe rowBottom">
						<Product id="211" title="Slip-in Sandals" price={17.99} image="https://lp2.hm.com/hmgoepprod?set=source[/e6/bf/e6bf3a8a61f36374136bde086b7062ebe85e4eae.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
					<div className="women__shoe rowBottom">
						<Product id="212" title="Platform Boots" price={39.99} image="https://lp2.hm.com/hmgoepprod?set=source[/4e/8c/4e8c381cae102f95146b8c8a994f3c08f477f334.jpg],origin[dam],category[ladies_shoes_boots],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" />
					</div>
				</div>
			</section>

		</div>
	)
}

export default Women
