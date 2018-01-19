var app =new Vue({
    el:'#app',
    data:{
        title: sample.title,
        address: sample.address,
        about: sample.about,
        headerImageStyle: {
            'background-image':'url(sample/header.jpg)'
        },
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true,
        modalOpen: false,
    },
    methods: {
        escapeKeyListener: function(event) {
            console.log(event.keyCode);
            if (event.keyCode == 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },

    watch: {
        modalOpen: function() {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            }else {
                document.body.classList.remove(className);
            }
        }
    },

    created: function() {
        document.addEventListener('keyup', this.escapeKeyListener);
    },

    destroyed:function(){
        console.log('destroyed');
        document.removeEventListener('keyup',this.escapeKeyListener);
    }
});
