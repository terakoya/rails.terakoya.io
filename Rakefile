task :default => :compile

task :compile do
  sh 'haml src/index.haml index.html'
  sh 'haml src/archives/1.haml archives/1.html'
  sh 'sass src/style.scss style.css'

  puts "Done!"
end
