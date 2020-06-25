document.addEventListener("DOMContentLoaded", function() {
    class Logo {
        constructor(url) {
        this.top = 0;
        this.left = 0;
        this.width = 200;
        this.imgUrl = url;
        this.html = null;
        }


        init() {
            let img = document.createElement('img');
            img.src = this.imgUrl;
            document.body.appendChild(img);
            this.html = img;
            this.render();
            document.body.style.backgroundColor = 'black';
        }

        render() {
            this.html.style.position = 'fixed';
            this.html.style.top = this.top + 'px';
            this.html.style.left = this.left + 'px';
            this.html.style.width = this.width + 'px';
        }

        moveUp() {
             let result = (this.top - 20);
             this.top += result;
             this.render();
        }

        moveDown() {
             let result = (this.top + 20);
             this.top += result;
             this.render();
        }

        moveLeft() {
             let result = (this.left - 20);
             this.left += result;
             this.render();
        }

        moveRight() {
            let result = (this.left + 20);
            this.left += result;
            this.render();
        }
    }

    const imgUrl = 'https://bit.ly/2tcDito';
    var mfLogotip = new Logo(imgUrl);


    mfLogotip.init();

     mfLogotip.moveRight();
    mfLogotip.moveRight();
    mfLogotip.moveRight();
    mfLogotip.moveRight();
    mfLogotip.moveDown();
    mfLogotip.moveDown();
    mfLogotip.moveDown();
    mfLogotip.moveDown();

    console.log(mfLogotip);


})
