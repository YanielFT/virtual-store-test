package com.store.web.app.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@Table(name = "digital_products")
@EqualsAndHashCode(callSuper = true)
public class DigitalProduct extends Product {
    @Column(name = "download_link")
    private String downloadLink;
}
