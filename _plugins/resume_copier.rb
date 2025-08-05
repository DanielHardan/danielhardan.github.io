# frozen_string_literal: true

# Plugin to copy PDF files from resume folder to site root
module Jekyll
  class ResumeCopier < Jekyll::Generator
    priority :low

    def generate(site)
      resume_dir = File.join(site.source, 'resume')
      
      # Only proceed if resume directory exists
      return unless Dir.exist?(resume_dir)

      # Find all PDF files in the resume directory
      pdf_files = Dir.glob(File.join(resume_dir, '*.pdf'))
      
      pdf_files.each do |pdf_path|
        filename = File.basename(pdf_path)
        
        # Create a custom static file that places PDFs in the site root
        static_file = ResumeStaticFile.new(site, site.source, 'resume', filename)
        site.static_files << static_file
        
        Jekyll.logger.info "Resume Copier:", "Copying #{filename} to site root"
      end
    end
  end

  # Custom static file class that overrides the destination path
  class ResumeStaticFile < Jekyll::StaticFile
    def destination(dest)
      # Place the file directly in the site root instead of in a resume subdirectory
      File.join(dest, File.basename(@name))
    end
  end
end
