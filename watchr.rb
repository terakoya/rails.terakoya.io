watch('src/index.haml') { system('haml src/index.haml index.html') }
watch('src/style.scss') { system('sass src/style.scss style.css') }
