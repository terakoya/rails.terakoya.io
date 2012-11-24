watch('index.haml') {|md| system('haml index.haml ../index.html') }
watch('style.scss') { system('sass style.scss ../style.css') }
