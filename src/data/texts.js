
//

const setLanguages = [];

function TextNode( engText ) {

	const node = document.createTextNode( engText );

	setLanguages.push( ( language ) => {

		node.nodeValue = engText;

	})

	return node

};

//

function setLanguage( language ) {

	setLanguages.forEach( (fn) => fn( language ) );

};

export { setLanguage }
export default {

	// MENU

	menu: {
		consulting: TextNode( "Item 1" ),
		prototypes: TextNode( "Item 2" ),
		casting: TextNode( "Item 3" ),
		doc: TextNode( "Item 4" ),
		webdev: TextNode( "Item 5" ),
		samples: TextNode( "Item 6" ),
		contact: TextNode( 'Item 7' )
	},

	// HOMEPAGE

	homepage: {

		// INTRO SCENE

		intro: {
			intro: TextNode(
				'Home Block'
			)
		},

		// EXPERTISE SCENE

		expertise: {
			title: TextNode( "Block 2" ),

			text: TextNode(
				`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Nulla consectetur tellus nisi, quis mollis tellus congue id. 
				Sed quis luctus lectus. Nam lorem sapien, maximus et orci quis, mattis sodales sapien. 
				Praesent sit amet neque sem. Integer et fringilla tellus. Aenean finibus sapien nisi, 
				id faucibus eros hendrerit et. Morbi a interdum ligula. Maecenas nec nibh massa`
			),

			more: TextNode( "details" )
		},

		// PROTOTYPES SCENE

		prototypes: {
			title: TextNode(
				"Block 3"
			),

			text: TextNode(
				`Vestibulum varius vitae nibh et consequat. 
				Morbi lobortis leo ultrices purus lobortis pharetra. 
				Aenean condimentum ac orci non mattis. .`
			),

			more: TextNode( "details" )
		},

		// CASTING PARTS SCENE

		casting: {
			title: TextNode( "Block 4" ),

			text: TextNode(
				`Praesent consequat ante ac lorem ornare faucibus. 
				Phasellus blandit, quam in sagittis ultrices, 
				enim dui interdum purus, luctus consectetur velit lectus sed felis. `
			),

			more: TextNode( "details" )
		},

		// DOCUMENTATION SCENE

		doc: {
			title: TextNode( "Block 5" ),

			text: TextNode(
				`Sed vel neque non nibh condimentum posuere in sit amet massa. 
				Praesent a lorem tempor, hendrerit nulla et, consectetur diam.
				`
			),

			more: TextNode( "details" )
		},

		// CONTACT SCENE

		contact: {
			title: TextNode( "More information :" ),

			webdevLink: TextNode( 'Section 1' ),
			samplesLink: TextNode( 'Section 2' ),
			contactLink: TextNode( 'Section 3' /* 'Contact & Rate', 'Contact & Tarifs' */ )
		}

	},

	// INFO MODULES

	modules: {

		// EXPERTISE

		expertise: {
			title: TextNode( "Title" ),

			presentation: {
				title: TextNode( "Sub title" ),

				speech1: TextNode(
					`Donec ut faucibus ante, in porttitor ipsum. Nullam mattis dolor a massa ornare, eget ornare orci semper. Fusce rutrum, ligula ac efficitur bibendum, turpis lectus volutpat velit, sed semper dui dolor eget leo.`
				),
			
				speech2: TextNode(
						`Nunc posuere ex tempus elementum tempor. Ut hendrerit nunc dignissim, luctus nisi eu, cursus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mi purus, semper eget vulputate vitae, suscipit ac nisl.`
					)
			},

			service: {
				title: TextNode( "Sub title" ),

				speech: TextNode(
					`Vivamus sit amet nunc ac ante mollis lobortis sed quis neque. Proin auctor porttitor consectetur. Ut ultricies sapien vitae erat rhoncus dapibus eleifend ut mi. Phasellus laoreet orci a nulla lacinia, et commodo erat aliquam. Aliquam placerat est quis nisi aliquam, eget rutrum urna blandit.`
				)
			}
			
		},

		// PROTOTYPES

		prototypes: {
			title: TextNode( 'Title' ),

			speech1: TextNode(
				`Proin porttitor non ligula sed convallis. Nam eu ipsum in quam tempus bibendum ut eget ligula. Vivamus lobortis tortor eget diam facilisis congue. Etiam mollis vestibulum dui sed vulputate. Sed sodales vestibulum augue. Praesent luctus condimentum ligula, in porta ligula fringilla eget. Praesent quam sem, convallis sed quam a, aliquet maximus tellus. `
			),

			speech2: TextNode(
				`Quisque placerat dictum ex a congue. Vivamus sit amet erat ex. Quisque efficitur rutrum turpis quis dapibus. Maecenas semper fringilla dui, sed posuere erat hendrerit sed. Aliquam ut bibendum diam, vitae venenatis mi. In condimentum est id sem gravida placerat. Sed augue odio, vehicula a purus quis, tincidunt pharetra massa. Nullam nisi massa, ultricies sit amet risus consectetur, malesuada accumsan velit. Pellentesque ut varius libero.`
			),

			speech3: TextNode(
				`usce porta ultricies ex quis posuere. Mauris accumsan tempus ornare. Vivamus dictum ligula neque, sed ornare nibh semper vulputate. Pellentesque lobortis lacus ac nunc scelerisque, sed lacinia lectus cursus. `
			)
		},

		// CASTING

		casting: {
			title: TextNode( 'Title' ),

			speech1: TextNode(
				`Morbi volutpat congue nisl. Nulla at rhoncus tortor. Suspendisse tincidunt, nisl sit amet commodo volutpat, sem justo aliquet est, quis vestibulum justo turpis in mauris. Pellentesque convallis est et arcu dapibus, elementum fermentum ex commodo. Fusce sem quam, ultricies at dictum vitae, ullamcorper vel purus. Duis semper rutrum eleifend. Quisque vitae faucibus urna, vitae interdum lorem. Quisque aliquet tellus non mollis imperdiet. Integer nulla justo, convallis vel erat vel, sodales euismod turpis. Aliquam a purus hendrerit lacus faucibus tempus. Cras sagittis hendrerit purus nec condimentum. Nullam sollicitudin ornare aliquam.`
			),

			speech2: TextNode(
				`Donec ullamcorper malesuada enim, ut malesuada urna sollicitudin in. Cras efficitur venenatis enim. Mauris ac massa sed ante tempus pulvinar non id dui. Mauris viverra lectus nec nunc euismod, ac cursus ante scelerisque. Quisque mollis euismod tempus. Aliquam commodo dui quis ultrices pellentesque. Proin eget neque aliquet, vestibulum sapien at, finibus nisl. Quisque tempor egestas quam, vitae iaculis purus vestibulum non.`
			)
		},

		// DOCUMENTATION

		doc: {
			title: TextNode( 'Title' ),

			speech1: TextNode(
				`Nunc eleifend venenatis diam nec iaculis. Nam et hendrerit leo. Donec vulputate sit amet enim id eleifend. Integer eu erat eget urna tincidunt mattis. Cras mi leo, facilisis eget consectetur et, imperdiet interdum nibh. Aliquam rutrum eros et nisi vestibulum, quis pharetra urna molestie. Morbi tempor ex nunc, sed bibendum felis finibus commodo. `
			),

			speech2: TextNode(
				`Vivamus sollicitudin, odio eu congue ornare, massa mauris iaculis turpis, non tempus tortor risus id nisi. Sed non pretium orci, at consectetur diam. Duis finibus lacinia risus a gravida. Integer commodo sapien risus, ut mollis magna porttitor quis. Cras ex leo, convallis sed malesuada sit amet, vestibulum egestas nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
			)
		},

		// WEB DEVELOPMENT

		webdev: {
			title: TextNode( 'Title' ),

			speech1: TextNode(
				`Morbi in convallis dolor. Nunc molestie orci purus, at tincidunt magna faucibus vitae. Cras tellus nulla, egestas eu sapien nec, egestas feugiat felis. Etiam est eros, ultricies non lectus sed, tempus vulputate ipsum. Nullam laoreet, turpis et eleifend sodales, tortor quam dignissim erat, sit amet tristique elit eros semper eros. Morbi euismod, erat porttitor blandit ultrices, metus metus maximus tellus, pharetra vulputate nisl tortor ac est. Nam consequat risus ex, ut vestibulum nisl aliquet non. Aliquam et ex nec est tristique mattis sed ac nisl. Donec faucibus venenatis erat, a tincidunt erat. In maximus erat justo, sit amet sollicitudin risus consequat vitae.`
			),

			speech2: TextNode(
				`Aenean accumsan purus eu massa dictum, ac facilisis nibh gravida. Praesent ac consectetur urna. Morbi dignissim, purus sit amet mattis convallis, eros leo aliquet diam, ut scelerisque metus mauris id mi. Mauris nec porta dolor. Maecenas blandit massa sed nulla finibus, elementum rutrum est ultrices. Etiam bibendum id purus in lacinia. Etiam varius in erat eget vestibulum. Nam at dictum nisi, congue feugiat velit. Nunc placerat ullamcorper erat, a lacinia ante vestibulum eu. Suspendisse facilisis nunc ligula, in rutrum lacus faucibus sed. Fusce iaculis eros ut vestibulum luctus.`
			)
		},

		// SAMPLES

		samples: {
			title: TextNode( "Title" ),

			renders: TextNode( 'Maecenas facilisis leo vehicula, varius orci quis, laoreet massa.' ),

			cad: TextNode( 'Pellentesque egestas elit sit amet ultrices vulputate.' )
		},

		// CONTACT

		contact: {
			title: TextNode( 'Title' /* 'Contact & Rate', 'Contact & Tarifs' */ ),

			speech: TextNode(
				`Suspendisse non sollicitudin nisi. Sed lobortis maximus ligula a consequat. Vivamus tincidunt massa facilisis enim molestie, ac euismod ante porttitor. Etiam a sodales turpis, in posuere urna. Donec tincidunt mi id lorem fermentum, nec volutpat lorem pharetra. Nullam quis malesuada nunc, a ultrices ex. Vivamus viverra, enim sit amet congue porta, dui magna vehicula quam, vitae vulputate nulla dui euismod risus.`
			),

			hourlyRate: TextNode(
				'Etiam faucibus tortor eu quam maximus venenatis. Nullam id gravida metus, id hendrerit nibh. Quisque ac sapien eu lorem maximus lobortis at sed erat. In magna tortor, molestie in gravida sit amet, gravida sed lorem. Sed sed erat a diam sodales pulvinar. Aliquam commodo est sed massa dictum laoreet vel id erat. Integer id sem eget est dignissim tincidunt. Sed et euismod risus, in vestibulum dui. Ut fringilla accumsan vulputate. Vestibulum in suscipit elit. Donec nisi velit, pretium ut tellus bibendum, hendrerit rhoncus ligula. Nulla pulvinar ultricies urna, et tincidunt lorem molestie quis. Cras et arcu ex.'
			)
		}

	}

}