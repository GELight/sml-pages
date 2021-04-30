Page
    html
        head
            title
                Text "Test Layout"
            End
            link
                href css/root-variables.css
                type text/css
                rel stylesheet
            End
            link
                href css/fonts.css
                type text/css
                rel stylesheet
            End
            link
                href css/sml/components.css
                type text/css
                rel stylesheet
            End
            link
                href css/sml/theme-default.css
                type text/css
                rel stylesheet
            End
            link
                href css/sml/markdown.css
                type text/css
                rel stylesheet
            End
        End
        body
            Slot
                From ../layouts/page-header.sml
            End
            Slot default
        End
    End
End