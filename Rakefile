task :default => :watchr

task :watchr do
  ['haml src/index.haml index.html', 'sass src/style.scss style.css'].each do |command|
    puts command
    system(command)
  end

  puts "Done!"
end
