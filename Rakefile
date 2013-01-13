task :default => :compile

task :compile do
  sh 'haml src/index.haml index.html'
  sh 'sass src/style.scss style.css'

  puts "Done!"
end
