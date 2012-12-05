task :watchr do
  system('haml src/index.haml index.html')
  system('sass src/style.scss style.css')
end

task :default=>[:watchr]
