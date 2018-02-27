<?xml version="1.0" encoding="ISO-8859-1" ?>
<xsl:stylesheet 
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
   version="1.0">
   <xsl:output indent="yes" method="xml" encoding="ISO-8859-1" omit-xml-declaration="yes" cdata-section-elements="message" />
   <xsl:template match="/">
        <xsl:for-each select="response/alerts/alert/message">
            <xsl:value-of select="text()"/>
            <xsl:text>&#xa;</xsl:text>
            <xsl:text>&#xd;</xsl:text>
        </xsl:for-each>
   </xsl:template>
</xsl:stylesheet>