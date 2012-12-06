task :default => :compile

def execute_command(cmdline)
  puts cmdline
  system cmdline
end

task :compile do
  execute_command 'haml src/index.haml index.html'
  execute_command 'sass src/style.scss style.css'

  puts "Done!"
end
